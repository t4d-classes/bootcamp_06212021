import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { createDeleteColorAction  } from '../actions/color-tool';

export const useColorList = () => {

  const colors = useSelector(state => state.colors);

  const actions = bindActionCreators({
    deleteColor: createDeleteColorAction,
  }, useDispatch());

  return {
    colors,
    ...actions,
  };

};