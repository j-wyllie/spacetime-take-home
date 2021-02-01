import React from 'react';
import './App.css';
import Menu from './features/menu/Menu';
import Viewer from './features/viewer/Viewer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-title">Form Analysis</h2>
      </header>
      <Menu/>
      <Viewer/>
    </div>
  );
}

export default App;
