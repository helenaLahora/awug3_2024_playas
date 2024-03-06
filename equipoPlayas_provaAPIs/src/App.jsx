import React from 'react';
import './App.css';
import LlistaBusLinies from './components/LlistaBusLinies';
import LlistaBusParades from './components/LlistaBusParades';
import LlistaMetroLinies from './components/LlistaMetroLinies';
import LlistaMetroEstacio from './components/LlistaMetroEstacions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TMB Move</h1> {/* Títol de la pàgina */}
      </header>
      <main>
        <LlistaBusLinies />
      </main>
    </div>
  );
}

export default App;