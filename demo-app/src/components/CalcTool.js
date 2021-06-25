import PropTypes from "prop-types";
import { useState } from 'react';

export const CalcTool = ({ result, onAdd: add, onSubtract: subtract }) => {

  const [numInput, setNumInput] = useState(0);

  return (
    <div>
      <div>Num: <input type="text" value={numInput}
        onChange={e => setNumInput(Number(e.target.value))} /></div>
      <div>Result: {result}</div>

      <div>
        <button type="button" onClick={() => add(numInput)}>+</button>
        <button type="button" onClick={() => subtract(numInput)}>-</button>
      </div>
    </div>
  )

};

CalcTool.propTypes = {
  result: PropTypes.number,
  onAdd: PropTypes.func,
  onSubtract: PropTypes.func,
};