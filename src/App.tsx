import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import ConstellationParticles from './ConstellationParticles';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    
    <div>
      <ConstellationParticles />
        <header>
          <NavigationBar></NavigationBar>
        </header>
        <body>
        
        </body>
      
    </div>
    
  );
}

export default App;
