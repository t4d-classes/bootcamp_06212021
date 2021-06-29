import {
  ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION
} from '../actions/calc-tool';

export const resultSelector = ({ history }) => {

  return history.reduce( (result, entry) => {

    switch (entry.opName) {
      case ADD_ACTION:
        return result + entry.opValue;
      case SUBTRACT_ACTION:
        return result - entry.opValue;
      case MULTIPLY_ACTION:
        return result * entry.opValue;
      case DIVIDE_ACTION:
        return result / entry.opValue;
      default:
        return result;
    }
  
  }, 0);

}