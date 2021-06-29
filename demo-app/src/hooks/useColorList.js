import { useEffect, useMemo } from 'react';

import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { refreshColors, createDeleteColorAction } from '../actions/color-tool';

export const useColorList = () => {

  const colors = useSelector(state => state.colors);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    refreshColors: refreshColors,
    deleteColor: createDeleteColorAction,
  }, dispatch), [dispatch]);

  useEffect(() => {
    actions.refreshColors();
  }, [actions])

  return {
    colors,
    ...actions,
  };

};