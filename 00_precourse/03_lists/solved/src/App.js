import React from 'react';
import './App.css';
import PizzaTracker from './PizzaTracker';

function App() {
  let orders = [
    { customerName: "Steve", progress: 0 },
    { customerName: "Mary", progress: 1 },
    { customerName: "Tom", progress: 2 },
    { customerName: "Sue", progress: 3 },
    { customerName: "David", progress: 4 },
  ];

  return (
    <>
    <div className="App">
      {orders.map( value => <PizzaTracker progress={value.progress} customerName={value.customerName} />)}
    </div>
    <div>
      <PizzaTracker/>
    </div>
    </>
  );
}

export default App;
