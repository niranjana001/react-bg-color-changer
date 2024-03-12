import React, { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('');

  const changeBackgroundColor = (color) => {
    setBgColor(color);
  };

  return (
    
    <div className="App"  style={{ backgroundColor: bgColor }}>
      <h1>Background color changer app</h1>
      <div className="buttons">
        <button className="blue" onClick={() => changeBackgroundColor('blue')}>Blue</button>
        <button className="green"  onClick={() => changeBackgroundColor('green')}>Green</button>
        <button className="yellow" onClick={() => changeBackgroundColor('rgb(184, 184, 18)')}>Yellow</button>
        <button className="red" onClick={() => changeBackgroundColor('red')}>Red</button>
        </div>
    </div>
  );
}

export default App;
