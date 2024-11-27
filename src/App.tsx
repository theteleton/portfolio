import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import ConstellationParticles from './ConstellationParticles';



function App() {
  return (
    
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <ConstellationParticles />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "#fff" }}>
        <header className="App-header">
          <NavigationBar></NavigationBar>
        </header>
      </div>
    </div>
    
  );
}

export default App;
