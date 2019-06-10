import React from 'react';
import './App.css';

function App() {
  let customWidth = "33%";
  return (
    <div className="App">
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: "25%"}}></div>
      </div>
      <br/>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: customWidth}}></div>
      </div>
      {/* BONUS: labels */}
      <br/>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: customWidth}}>{customWidth}</div>
      </div>
      {/* BONUS: colors & labels */}
      <br/>
      <div className="progress">
        <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}}>25%</div>
      </div>
      <div className="progress">
        <div className="progress-bar bg-danger" role="progressbar" style={{width: "33%"}}>33%</div>
      </div>
      {/* BONUS: colors, labels, & layered */}
      <br/>
      <div className="progress">
        <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}}>25%</div>
        <div className="progress-bar bg-danger" role="progressbar" style={{width: "33%"}}>33%</div>
      </div>
    </div>
  );
}

export default App;
