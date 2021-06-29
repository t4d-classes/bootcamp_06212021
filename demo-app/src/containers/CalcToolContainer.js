import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  createAddAction,
  createSubtractAction,
  createMultiplyAction,
  createDivideAction,
  createClearAction,
  createDeleteHistoryEntryAction,
} from '../actions/calc-tool';

import { CalcTool } from '../components/CalcTool';


const mapStateToProps = state => {
  return {
    history: state.history,
    result: state.result,
    errorMessage: state.errorMessage,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  onAdd: createAddAction,
  onSubtract: createSubtractAction,
  onMultiply: createMultiplyAction,
  onDivide: createDivideAction,
  onClear: createClearAction,
  onDeleteHistoryEntryAction: createDeleteHistoryEntryAction,
}, dispatch);



export const createCalcToolContainer = connect(mapStateToProps /* useSelector */, mapDispatchToProps /* useDispatch */);

export const CalcToolContainer = createCalcToolContainer(CalcTool);

