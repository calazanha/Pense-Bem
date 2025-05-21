import './styles/StartScreen.css';

const StartScreen = ({ onStart, selectedProgram, setSelectedProgram }) => {
  const selectProgram = (programNumber) => {
    setSelectedProgram(programNumber);
  };

  return (
    <div className="start-screen">
      <h1>PENSE BEM - SENNINHA</h1>
      
      <div className="device-container">
        <div className="device-screen">
          <p>SELECIONE O PROGRAMA:</p>
          <p className="selected-program">PROGRAMA {selectedProgram}</p>
        </div>
        
        <div className="program-buttons">
          <button 
            className={`program-button ${selectedProgram === 1 ? 'active' : ''}`}
            onClick={() => selectProgram(1)}
          >
            1
          </button>
          <button 
            className={`program-button ${selectedProgram === 2 ? 'active' : ''}`}
            onClick={() => selectProgram(2)}
          >
            2
          </button>
          <button 
            className={`program-button ${selectedProgram === 3 ? 'active' : ''}`}
            onClick={() => selectProgram(3)}
          >
            3
          </button>
          <button 
            className={`program-button ${selectedProgram === 4 ? 'active' : ''}`}
            onClick={() => selectProgram(4)}
          >
            4
          </button>
          <button 
            className={`program-button ${selectedProgram === 5 ? 'active' : ''}`}
            onClick={() => selectProgram(5)}
          >
            5
          </button>
        </div>
        
        <div className="action-buttons">
          <button className="start-button" onClick={onStart}>
            INICIAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;