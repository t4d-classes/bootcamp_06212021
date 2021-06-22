export const CarViewRow = ({ car, onDeleteCar }) => {

  const deleteCar = () => onDeleteCar(car.id);

  return (
    <tr>
      <td>{car.id}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.price}</td>
      <td>
        <button type="button" onClick={deleteCar}>
          Delete
        </button>
      </td>
    </tr>
  );
};

