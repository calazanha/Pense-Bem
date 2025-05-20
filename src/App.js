import { useState } from 'react';
import GameScreen from './components/GameScreen';
import StartScreen from './components/StartScreen';
import ResultScreen from './components/ResultScreen';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('start');
  const [score, setScore] = useState(0);
  const [selectedProgram, setSelectedProgram] = useState(1);

  const startGame = () => setGameState('game');
  const finishGame = (finalScore) => {
    setScore(finalScore);
    setGameState('result');
  };
  const restartGame = () => setGameState('start');

  return (
    <div className="app">
      {gameState === 'start' && (
        <StartScreen 
          onStart={startGame}
          selectedProgram={selectedProgram}
          setSelectedProgram={setSelectedProgram}
        />
      )}
      {gameState === 'game' && (
        <GameScreen 
          onFinish={finishGame} 
          selectedProgram={selectedProgram}
        />
      )}
      {gameState === 'result' && (
        <ResultScreen 
          score={score} 
          onRestart={restartGame}
          selectedProgram={selectedProgram}
        />
      )}
    </div>
  );
}

export default App;