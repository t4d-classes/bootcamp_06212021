import { useState } from "react";

import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";

export const CarTool = ({cars: initialCars }) => {
  const [cars, setCars] = useState([...initialCars]);

  const [editCarId, setEditCarId] = useState(-1);

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
    // setCarForm({
    //   ...carForm,
    //   [e.target.name]: e.target.value,
    // });

    carForm[e.target.name] = e.target.value;
    setCarForm(carForm);
  };

  const addCar = () => {
    // setCars([
    //   ...cars,
    //   {
    //     ...carForm,
    //     id: Math.max(...cars.map(c => c.id), 0) + 1,
    //   }
    // ])

    cars.push({
      ...carForm,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    });
    setCars(cars);
  };

  const deleteCar = (carId) => {
    setCars(cars.filter(c => c.id !== carId));
  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={setEditCarId} onDeleteCar={deleteCar} />
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
