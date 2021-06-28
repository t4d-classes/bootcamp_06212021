import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import {
  createAddAction,
  createSubtractAction,
  createMultiplyAction,
  createDivideAction,
  createClearAction,
  createDeleteHistoryEntryAction,
} from '../actions/calc-tool';

import { CalcTool } from '../components/CalcTool';

export const CalcToolContainer = () => {

  const history = useSelector(state => {
    return state.history;
  });
  const result = useSelector(state => state.result);
  const errorMessage = useSelector(state => state.errorMessage);

  // actions = {
  //   onAdd: value => dispatch(createAddAction(value)),
  //   onSubtract: value => dispatch(createSubtractAction(value)),
  // }
  const actions = bindActionCreators({
    onAdd: createAddAction,
    onSubtract: createSubtractAction,
    onMultiply: createMultiplyAction,
    onDivide: createDivideAction,
    onClear: createClearAction,
    onDeleteHistoryEntryAction: createDeleteHistoryEntryAction,
  }, useDispatch() /* returns the dispatch function from the store */);

  return <CalcTool result={result} history={history}
    errorMessage={errorMessage} {...actions} />;

};