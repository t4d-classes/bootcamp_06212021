import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import {
  createAddCarAction, createSaveCarAction,
  createDeleteCarAction, createEditCarAction,
  createCancelCarAction
} from '../actions/car-tool';

import { ToolHeader } from "../components/ToolHeader";
import { CarTable } from "../components/CarTable";
import { CarForm } from "../components/CarForm";

export const CarToolContainer = () => {

  const cars = useSelector(state => state.cars);
  const editCarId = useSelector(state => state.editCarId);

  const carTableActions = bindActionCreators({
    onSaveCar: createSaveCarAction,
    onDeleteCar: createDeleteCarAction,
    onEditCar: createEditCarAction,
    onCancelCar: createCancelCarAction
  }, useDispatch());

  const carFormActions = bindActionCreators({
    onSubmitCar: createAddCarAction,
  }, useDispatch());

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId} {...carTableActions} />
      <CarForm buttonText="Add Car" {...carFormActions} />
    </>
  );
};
