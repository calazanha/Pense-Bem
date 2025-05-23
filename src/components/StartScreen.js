import './styles/StartScreen.css';

import { TbHelmet } from "react-icons/tb";
import { CgPokemon } from "react-icons/cg";
import { PiSoccerBallLight } from "react-icons/pi";
import { GiMagicBroom } from "react-icons/gi";
import { GiLightSabers } from "react-icons/gi";

const StartScreen = ({ onStart, selectedProgram, setSelectedProgram }) => {
  const selectProgram = (programNumber) => {
    setSelectedProgram(programNumber);
  };

  return (
    <div className="start-screen">
      <h1>PENSE BEM</h1>
      
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
            <TbHelmet />
          </button>
          <button 
            className={`program-button ${selectedProgram === 2 ? 'active' : ''}`}
            onClick={() => selectProgram(2)}
          >
            <CgPokemon />
          </button>
          <button 
            className={`program-button ${selectedProgram === 3 ? 'active' : ''}`}
            onClick={() => selectProgram(3)}
          >
            <PiSoccerBallLight />
          </button>
          <button 
            className={`program-button ${selectedProgram === 4 ? 'active' : ''}`}
            onClick={() => selectProgram(4)}
          >
            <GiMagicBroom />
          </button>
          <button 
            className={`program-button ${selectedProgram === 5 ? 'active' : ''}`}
            onClick={() => selectProgram(5)}
          >
            <GiLightSabers />
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