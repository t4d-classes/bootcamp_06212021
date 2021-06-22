import { useState } from "react";

import { CarTable } from "./CarTable";

export const CarTool = (props) => {
  const [cars, setCars] = useState([...props.cars]);

  const addCar = () => {
    // code which used setCars to add a car...
  };

  const deleteCar = (carId) => {
    // code which calls setCars and filter to delete a car....
    setCars(cars.filter((c) => c.id !== carId));
  };

  return (
    <>
      <header>
        <h1>Car Tool</h1>
      </header>
      <CarTable cars={cars} onDeleteCar={deleteCar} />
    </>
  );
};
