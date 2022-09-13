import React from 'react';

const { Component } = require('react');

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cal-body">
        <div className="cal-container">
          <div className="cal-results">0</div>
          <div className="cal-btn">
            <div className="btn-box">AC</div>
            <div className="btn-box">+/-</div>
            <div className="btn-box">%</div>
            <div className="btn-box-orange">÷</div>
          </div>
          <div className="cal-btn">
            <div className="btn-box">7</div>
            <div className="btn-box">8</div>
            <div className="btn-box">9</div>
            <div className="btn-box-orange">x</div>
          </div>
          <div className="cal-btn">
            <div className="btn-box">4</div>
            <div className="btn-box">5</div>
            <div className="btn-box">6</div>
            <div className="btn-box-orange">-</div>
          </div>
          <div className="cal-btn">
            <div className="btn-box">1</div>
            <div className="btn-box">2</div>
            <div className="btn-box">3</div>
            <div className="btn-box-orange">+</div>
          </div>
          <div className="cal-btn">
            <div className="btn-box-big">0</div>
            <div className="btn-box">.</div>
            <div className="btn-box-orange">=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
