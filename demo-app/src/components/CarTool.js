import { useState } from "react";

import { CarTable } from "./CarTable";

export const CarTool = ({cars: initialCars }) => {
  const [cars, setCars] = useState([...initialCars]);

  const [
    carForm,
    setCarForm,
  ] = useState({
    make: '',
    model: '',
    year: 1900,
    color: '',
    price: 0,
  });

  const change = e => {
    setCarForm({
      ...carForm,
      [e.target.name]: e.target.value,
    });
  };

  const addCar = () => {
    setCars([
      ...cars,
      {
        ...carForm,
        id: Math.max(...cars.map(c => c.id)) + 1,
      }
    ])
  };

  const deleteCar = (carId) => {
    setCars(cars.filter(c => c.id !== carId));
  };

  return (
    <>
      <header>
        <h1>Car Tool</h1>
      </header>
      <CarTable cars={cars} onDeleteCar={deleteCar} />
      <form>
        <div>
          <label htmlFor="make-input">Make</label>
          <input
            type="text"
            id="make-input"
            value={carForm.make}
            onChange={change}
            name="make"
          />
        </div>
        <div>
          <label htmlFor="model-input">Model</label>
          <input
            type="text"
            id="model-input"
            value={carForm.model}
            onChange={change}
            name="model"
          />
        </div>
        <div>
          <label htmlFor="year-input">Year</label>
          <input
            type="text"
            id="year-input"
            value={carForm.year}
            onChange={change}
            name="year"
          />
        </div>
        <div>
          <label htmlFor="color-input">Color</label>
          <input
            type="text"
            id="color-input"
            value={carForm.color}
            onChange={change}
            name="color"
          />
        </div>
        <div>
          <label htmlFor="price-input">Price</label>
          <input
            type="text"
            id="price-input"
            value={carForm.price}
            onChange={change}
            name="price"
          />
        </div>
        <button type="button" onClick={addCar}>
          Add Car
        </button>
      </form>

    </>
  );
};
