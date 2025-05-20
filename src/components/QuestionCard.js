import './styles/QuestionCard.css';

const QuestionCard = ({ question, onAnswer }) => {
  return (
    <div className="question-card">
      <h3>{question.pergunta}</h3>
      <div className="options">
        {question.opcoes.map((option, index) => (
          <button 
            key={index}
            onClick={() => onAnswer(index)}
            className="option-btn"
          >
            {String.fromCharCode(65 + index)}. {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;