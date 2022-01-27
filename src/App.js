import './App.css';
import Timer from './Timer';
import Settings from './Settings';
import * as React from 'react';
import {useState} from 'react';
import settingsContext from './SettingsContext';
function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes]= useState(45);

  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main>
      <h1>Focusdoro</h1>
      <settingsContext.Provider value={{  
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
      {showSettings ? <Settings />: <Timer />}
      </settingsContext.Provider>
      
    </main>
  );
}

export default App;
