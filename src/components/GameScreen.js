import { useState, useEffect } from 'react';
import './styles/GameScreen.css';
import programa1 from '../data/programa1';
import programa2 from '../data/programa2';
import programa3 from '../data/programa3';
import programa4 from '../data/programa4';
import programa5 from '../data/programa5';

const programs = { 1: programa1, 2: programa2, 3: programa3, 4: programa4, 5: programa5 };

const GameScreen = ({ onFinish, selectedProgram }) => {
  const questions = programs[selectedProgram];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswer = (buttonIndex) => {
    const correctAnswer = questions[currentQuestionIndex].resposta;
    const isCorrect = buttonIndex === correctAnswer;

    if (isCorrect) {
      const points = 3 - attempts;
      setScore(score + points);
      setFeedback(`CERTO! +${points} PONTOS`);
    } else {
      setAttempts(attempts + 1);
      setFeedback('ERRADO! TENTE NOVAMENTE');
      
      if (attempts >= 2) {
        setFeedback('FIM DAS TENTATIVAS');
      }
    }

    setShowFeedback(true);
    
    setTimeout(() => {
      setShowFeedback(false);
      if (isCorrect || attempts >= 2) {
        nextQuestion();
      }
    }, 1500);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAttempts(0);
    } else {
      onFinish(score);
    }
  };

  return (
    <div className="game-screen">
      <div className="device-container">
        <div className="device-screen">
          <div className="question-display">
            <p className="program-info">PROGRAMA {selectedProgram}</p>
            <p className="question-number">PERGUNTA {currentQuestionIndex + 1} DE {questions.length}</p>
            <p className="question-text">{questions[currentQuestionIndex].pergunta}</p>
          </div>
          
          {showFeedback && (
            <div className="feedback-display">
              {feedback}
            </div>
          )}
          
          {!showFeedback && (
            <div className="options-display">
              {questions[currentQuestionIndex].opcoes.map((option, index) => (
                <p key={index} className="option">
                  {String.fromCharCode(65 + index)}) {option}
                </p>
              ))}
            </div>
          )}
        </div>
        
        <div className="device-buttons">
          <button 
            className="answer-button red" 
            onClick={() => handleAnswer(0)}
            disabled={showFeedback}
          >
            A
          </button>
          <button 
            className="answer-button green" 
            onClick={() => handleAnswer(1)}
            disabled={showFeedback}
          >
            B
          </button>
          <button 
            className="answer-button blue" 
            onClick={() => handleAnswer(2)}
            disabled={showFeedback}
          >
            C
          </button>
          <button 
            className="answer-button yellow" 
            onClick={() => handleAnswer(3)}
            disabled={showFeedback}
          >
            D
          </button>
        </div>
        
        <div className="device-footer">
          <div className="score-display">PONTOS: {score}</div>
          <div className="attempts-display">TENTATIVAS: {attempts + 1}/3</div>
        </div>
      </div>
    </div>
  );
};

export default GameScreen;