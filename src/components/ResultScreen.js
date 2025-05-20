import './styles/ResultScreen.css';

const ResultScreen = ({ score, onRestart, selectedProgram }) => {
  const maxScore = 3 * 30; // 3 pontos por pergunta * 30 perguntas
  const percentage = Math.round((score / maxScore) * 100);
  
  let message = '';
  if (percentage >= 90) message = 'Excelente! Você é um mestre!';
  else if (percentage >= 70) message = 'Muito bom! Quase lá!';
  else if (percentage >= 50) message = 'Bom! Mas pode melhorar.';
  else message = 'Continue praticando!';

  return (
    <div className="result-screen">
      <h2>Fim do Jogo - Programa {selectedProgram}</h2>
      <div className="score-display">
        <div className="total-score">Pontuação: {score}</div>
        <div className="percentage">{percentage}% de acerto</div>
      </div>
      <div className="message">{message}</div>
      <button onClick={onRestart}>Jogar Novamente</button>
    </div>
  );
};

export default ResultScreen;