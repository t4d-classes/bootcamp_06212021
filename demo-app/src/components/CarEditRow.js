import { useState } from "react";

export const CarEditRow = ({ car, }) => {

  const [
    carForm,
    setCarForm,
  ] = useState({
    make: car.make,
    model: car.model,
    year: car.year,
    color: car.color,
    price: car.price,
  });

  const change = e => {
    setCarForm({
      ...carForm,
      [e.target.name]: e.target.value,
    });
  }; 

  return (
    <tr>
      <td>{car.id}</td>
      <td><input
            type="text"
            id="make-input"
            value={carForm.make}
            onChange={change}
            name="make"
          /></td>
      <td><input
            type="text"
            id="model-input"
            value={carForm.model}
            onChange={change}
            name="model"
          /></td>
      <td><input
            type="text"
            id="year-input"
            value={carForm.year}
            onChange={change}
            name="year"
          /></td>
      <td><input
            type="text"
            id="color-input"
            value={carForm.color}
            onChange={change}
            name="color"
          /></td>
      <td><input
            type="text"
            id="price-input"
            value={carForm.price}
            onChange={change}
            name="price"
          /></td>
      <td>
        <button type="button" onClick={null}>
          Save
        </button>
        <button type="button" onClick={null}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

