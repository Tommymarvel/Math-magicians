import React from 'react';
import calculate from '../logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function
const { Component } = require('react');

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  clickHandler = (e) => {
    this.setState((obj) => calculate(obj, e.target.textContent));
  };

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="cal-body">
        <div className="cal-container">
          <div className="cal-results">
            {total}
            {operation}
            {next}
          </div>
          <div className="cal-btn">
            <div
              onClick={this.clickHandler}
              onKeyPress={this.clickHandler}
              role="button"
              aria-hidden
              className="btn-box"
            >
              AC
            </div>
            <div
              onClick={this.clickHandler}
              onKeyPress={this.clickHandler}
              role="button"
              aria-hidden
              className="btn-box"
            >
              +/-
            </div>
            <div
              onClick={this.clickHandler}
              onKeyPress={this.clickHandler}
              role="button"
              aria-hidden
              className="btn-box"
            >
              %
            </div>
            <div
              onClick={this.clickHandler}
              onKeyPress={this.clickHandler}
              role="button"
              aria-hidden
              className="btn-box-orange"
            >
              ÷
            </div>
          </div>
          <div className="cal-btn">
            <div
              onClick={this.clickHandler}
              onKeyPress={this.clickHandler}
              role="button"
              aria-hidden
              className="btn-box"
            >
              7
            </div>
            <div
              onClick={this.clickHandler}
              onKeyPress={this.clickHandler}
              role="button"
              aria-hidden
              className="btn-box"
            >
              8
            </div>
            <div
              onClick={this.clickHandler}
              onKeyPress={this.clickHandler}
              role="button"
              aria-hidden
              className="btn-box"
            >
              9
            </div>
            <div
              onClick={this.clickHandler}
              onKeyPress={this.clickHandler}
              role="button"
              aria-hidden
              className="btn-box-orange"
            >
              x
            </div>
          </div>
          <div className="cal-btn">
            <div
              onClick={this.clickHandler}
              onKeyPress={this.clickHandler}
              role="button"
              aria-hidden
              className="btn-box"
            >
              4
            </div>
            <div
              onClick={this.clickHandler}
              onKeyPress={this.clickHandler}
              role="button"
              aria-hidden
              className="btn-box"
            >
              5
            </div>
            <div
              onClick={this.clickHandler}
              onKeyPress={this.clickHandler}
              role="button"
              aria-hidden
              className="btn-box"
            >
              6
            </div>
            <div
              onClick={this.clickHandler}
              onKeyPress={this.clickHandler}
              role="button"
              aria-hidden
              className="btn-box-orange"
            >
              -
            </div>
          </div>
          <div className="cal-btn">
            <div
              onClick={this.clickHandler}
              onKeyPress={this.clickHandler}
              role="button"
              aria-hidden
              className="btn-box"
            >
              1
            </div>
            <div
              onClick={this.clickHandler}
              onKeyPress={this.clickHandler}
              role="button"
              aria-hidden
              className="btn-box"
            >
              2
            </div>
            <div
              onClick={this.clickHandler}
              onKeyPress={this.clickHandler}
              role="button"
              aria-hidden
              className="btn-box"
            >
              3
            </div>
            <div
              onClick={this.clickHandler}
              onKeyPress={this.clickHandler}
              role="button"
              aria-hidden
              className="btn-box-orange"
            >
              +
            </div>
          </div>
          <div className="cal-btn">
            <div
              onClick={this.clickHandler}
              onKeyPress={this.clickHandler}
              role="button"
              aria-hidden
              className="btn-box-big"
            >
              0
            </div>
            <div
              onClick={this.clickHandler}
              onKeyPress={this.clickHandler}
              role="button"
              aria-hidden
              className="btn-box"
            >
              .
            </div>
            <div
              onClick={this.clickHandler}
              onKeyPress={this.clickHandler}
              role="button"
              aria-hidden
              className="btn-box-orange"
            >
              =
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
