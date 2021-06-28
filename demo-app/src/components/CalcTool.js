import PropTypes from "prop-types";
import { useState } from 'react';

export const CalcTool = ({
  result, history,
  onAdd: add, onSubtract: subtract,
  onMultiply: multiply, onDivide: divide,
  onClear: clear }) => {

  const [numInput, setNumInput] = useState(0);

  return (
    <div>
      <div>Result: {result}</div>
      <div>Num: <input type="text" value={numInput}
        onChange={e => setNumInput(Number(e.target.value))} /></div>

      <div>
        <button type="button" onClick={() => add(numInput)}>+</button>
        <button type="button" onClick={() => subtract(numInput)}>-</button>
        <button type="button" onClick={() => multiply(numInput)}>*</button>
        <button type="button" onClick={() => divide(numInput)}>/</button>
        <button type="button" onClick={clear}>C</button>
      </div>

      <ul>
        {history.map(entry => <li key={entry.opId}>
          {entry.opName} {entry.opValue}
        </li>)}
      </ul>
    </div>
  )

};

CalcTool.propTypes = {
  result: PropTypes.number,
  onAdd: PropTypes.func,
  onSubtract: PropTypes.func,
};