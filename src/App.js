import React from 'react';
// import Display from './components/display';
import Buttons from './components/buttons';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="calculator">
        {/* <Display /> */}
        <Buttons />
      </div>
    </div>
  );
}

export default App;
