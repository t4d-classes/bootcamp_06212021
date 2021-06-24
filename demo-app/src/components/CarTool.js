import { useState } from 'react';

import { useList } from '../hooks/useList';

import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

export const CarTool = ({cars: initialCars }) => {
  const [cars, appendCar, replaceCar, removeCar] = useList([...initialCars]);
  const [editCarId, setEditCarId] = useState(-1);

  const cancelCar = () => setEditCarId(-1);

  const addCar = (car) => {
    appendCar(car);
    cancelCar();
  };

  const saveCar = (car) => {
    replaceCar(car);
    cancelCar();
  };

  const deleteCar = (carId) => {
    removeCar(carId);
    cancelCar();
  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={setEditCarId} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
};
