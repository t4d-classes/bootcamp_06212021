import { useForm } from '../hooks/useForm';

export const CarEditRow = ({ car, onSaveCar, onCancelCar: cancelCar }) => {

  const [
    carForm,
    change
  ] = useForm({
    make: car.make,
    model: car.model,
    year: car.year,
    color: car.color,
    price: car.price,
  });

  const saveCar = () => {
    onSaveCar({ ...carForm, id: car.id });
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
        <button type="button" onClick={saveCar}>
          Save
        </button>
        <button type="button" onClick={null}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

