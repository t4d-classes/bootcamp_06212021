import { useMemo, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import {
  refreshCars, addCar, saveCar, deleteCar,
  createEditCarAction, createCancelCarAction
} from '../actions/car-tool';

import { ToolHeader } from "../components/ToolHeader";
import { CarTable } from "../components/CarTable";
import { CarForm } from "../components/CarForm";

export const CarToolContainer = () => {

  const cars = useSelector(state => state.cars);
  const editCarId = useSelector(state => state.editCarId);

  const dispatch = useDispatch();

  const carTableActions = useMemo(() => bindActionCreators({
    onSaveCar: saveCar,
    onDeleteCar: deleteCar,
    onEditCar: createEditCarAction,
    onCancelCar: createCancelCarAction
  }, dispatch), [dispatch]);

  const carFormActions = useMemo(() => bindActionCreators({
    onSubmitCar: addCar,
  }, dispatch), [dispatch]);

  useEffect(() => {
    dispatch(refreshCars());
  }, [dispatch])

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId} {...carTableActions} />
      <CarForm buttonText="Add Car" {...carFormActions} />
    </>
  );
};
