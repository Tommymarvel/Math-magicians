import React, { useState } from 'react';
import calculate from '../logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const clickHandler = (e) => {
    const buttonName = e.target.textContent;
    const myObj = calculate(state, buttonName);
    setState(myObj);
  };

  const { total, operation, next } = state;
  const op = operation === '%' ? '%' : operation;
  let result = '';
  if (total) {
    result = `${total} ${op || ''} ${next || ''}`;
  } else if (next) {
    result = `${next} ${op || ''}`;
  }
  return (
    <div className="cal-body">
      <div className="cal-container">
        <div className="cal-results">{result || 0}</div>
        <div className="cal-btn">
          <div
            onClick={clickHandler}
            onKeyPress={clickHandler}
            role="button"
            aria-hidden
            className="btn-box"
          >
            AC
          </div>
          <div
            onClick={clickHandler}
            onKeyPress={clickHandler}
            role="button"
            aria-hidden
            className="btn-box"
          >
            +/-
          </div>
          <div
            onClick={clickHandler}
            onKeyPress={clickHandler}
            role="button"
            aria-hidden
            className="btn-box"
          >
            %
          </div>
          <div
            onClick={clickHandler}
            onKeyPress={clickHandler}
            role="button"
            aria-hidden
            className="btn-box-orange"
          >
            ÷
          </div>
        </div>
        <div className="cal-btn">
          <div
            onClick={clickHandler}
            onKeyPress={clickHandler}
            role="button"
            aria-hidden
            className="btn-box"
          >
            7
          </div>
          <div
            onClick={clickHandler}
            onKeyPress={clickHandler}
            role="button"
            aria-hidden
            className="btn-box"
          >
            8
          </div>
          <div
            onClick={clickHandler}
            onKeyPress={clickHandler}
            role="button"
            aria-hidden
            className="btn-box"
          >
            9
          </div>
          <div
            onClick={clickHandler}
            onKeyPress={clickHandler}
            role="button"
            aria-hidden
            className="btn-box-orange"
          >
            x
          </div>
        </div>
        <div className="cal-btn">
          <div
            onClick={clickHandler}
            onKeyPress={clickHandler}
            role="button"
            aria-hidden
            className="btn-box"
          >
            4
          </div>
          <div
            onClick={clickHandler}
            onKeyPress={clickHandler}
            role="button"
            aria-hidden
            className="btn-box"
          >
            5
          </div>
          <div
            onClick={clickHandler}
            onKeyPress={clickHandler}
            role="button"
            aria-hidden
            className="btn-box"
          >
            6
          </div>
          <div
            onClick={clickHandler}
            onKeyPress={clickHandler}
            role="button"
            aria-hidden
            className="btn-box-orange"
          >
            -
          </div>
        </div>
        <div className="cal-btn">
          <div
            onClick={clickHandler}
            onKeyPress={clickHandler}
            role="button"
            aria-hidden
            className="btn-box"
          >
            1
          </div>
          <div
            onClick={clickHandler}
            onKeyPress={clickHandler}
            role="button"
            aria-hidden
            className="btn-box"
          >
            2
          </div>
          <div
            onClick={clickHandler}
            onKeyPress={clickHandler}
            role="button"
            aria-hidden
            className="btn-box"
          >
            3
          </div>
          <div
            onClick={clickHandler}
            onKeyPress={clickHandler}
            role="button"
            aria-hidden
            className="btn-box-orange"
          >
            +
          </div>
        </div>
        <div className="cal-btn">
          <div
            onClick={clickHandler}
            onKeyPress={clickHandler}
            role="button"
            aria-hidden
            className="btn-box-big"
          >
            0
          </div>
          <div
            onClick={clickHandler}
            onKeyPress={clickHandler}
            role="button"
            aria-hidden
            className="btn-box"
          >
            .
          </div>
          <div
            onClick={clickHandler}
            onKeyPress={clickHandler}
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
};

export default Calculator;
