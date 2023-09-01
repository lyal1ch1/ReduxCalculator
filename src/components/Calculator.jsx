import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteVallue,
  removeValue,
  incrementByAmount,
  calculateValue,
  sinValue,
  cosValue,
  tanValue,
  powValue,
} from '../redux/slices/calculatorSlice';
function Calculator() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="display">
        <span>{count}</span>
      </div>
      <div className="buttons">
        <button className="operator-button" onClick={() => dispatch(sinValue())}>
          SIN
        </button>
        <button className="operator-button" onClick={() => dispatch(cosValue())}>
          COS
        </button>
        <button className="operator-button" onClick={() => dispatch(tanValue())}>
          TAN
        </button>
        <button className="operator-button" onClick={() => dispatch(powValue())}>
          Х²
        </button>
        <button className="operator-button" onClick={() => dispatch(deleteVallue())}>
          AC
        </button>
        <button className="operator-button" onClick={() => dispatch(removeValue())}>
          DE
        </button>
        <button className="operator-button" onClick={() => dispatch(incrementByAmount('.'))}>
          .
        </button>
        <button className="operator-button" onClick={() => dispatch(incrementByAmount('/'))}>
          /
        </button>
        <button className="number-button" onClick={() => dispatch(incrementByAmount('7'))}>
          7
        </button>
        <button className="number-button" onClick={() => dispatch(incrementByAmount('8'))}>
          8
        </button>
        <button className="number-button" onClick={() => dispatch(incrementByAmount('9'))}>
          9
        </button>
        <button className="operator-button" onClick={() => dispatch(incrementByAmount('*'))}>
          *
        </button>
        <button className="number-button" onClick={() => dispatch(incrementByAmount('4'))}>
          4
        </button>
        <button className="number-button" onClick={() => dispatch(incrementByAmount('5'))}>
          5
        </button>
        <button className="number-button" onClick={() => dispatch(incrementByAmount('6'))}>
          6
        </button>
        <button className="operator-button" onClick={() => dispatch(incrementByAmount('-'))}>
          -
        </button>
        <button className="number-button" onClick={() => dispatch(incrementByAmount('1'))}>
          1
        </button>
        <button className="number-button" onClick={() => dispatch(incrementByAmount('2'))}>
          2
        </button>
        <button className="number-button" onClick={() => dispatch(incrementByAmount('3'))}>
          3
        </button>
        <button className="operator-button" onClick={() => dispatch(incrementByAmount('+'))}>
          +
        </button>
        <button className="number-button" onClick={() => dispatch(incrementByAmount('00'))}>
          00
        </button>
        <button className="number-button" onClick={() => dispatch(incrementByAmount('0'))}>
          0
        </button>
        <button
          className="number-button"
          onClick={() => {
            dispatch(calculateValue());
          }}
        >
          =
        </button>
      </div>
    </>
  );
}

export default Calculator;
