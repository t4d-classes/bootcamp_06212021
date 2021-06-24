import { useState } from 'react';
import { useList } from './useList';

export const useCarToolStore = (initialCars) => {

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



  return {
    cars,
    editCarId,
    addCar,
    saveCar,
    deleteCar,
    editCar: setEditCarId,
    cancelCar,
  };

};