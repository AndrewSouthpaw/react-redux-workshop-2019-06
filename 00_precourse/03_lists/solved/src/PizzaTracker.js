import React from 'react';
import PropTypes from 'prop-types';

function PizzaTracker(props) {
  return (
    <div>
      <p>Pizza for: {props.customerName}</p>
      <div className="progress">
        <div className={`progress-bar ${props.progress === 0 ? 'bg-danger' : 'bg-info'}`} role="progressbar" style={{width: '20%'}}>Ordered</div>
        <div className={`progress-bar ${props.progress === 1 ? 'bg-danger' : 'bg-info'}`} role="progressbar" style={{width: '20%'}}>Prepping</div>
        <div className={`progress-bar ${props.progress === 2 ? 'bg-danger' : 'bg-info'}`} role="progressbar" style={{width: '20%'}}>Cooking</div>
        <div className={`progress-bar ${props.progress === 3 ? 'bg-danger' : 'bg-info'}`} role="progressbar" style={{width: '20%'}}>Quality</div>
        <div className={`progress-bar ${props.progress === 4 ? 'bg-danger' : 'bg-info'}`} role="progressbar" style={{width: '20%'}}>Delivery</div>
      </div>
    </div>
  );
};

PizzaTracker.propTypes = {
  customerName: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired
};

PizzaTracker.defaultProps = {
  customerName: "John",
  progress: 2
};

export default PizzaTracker;
