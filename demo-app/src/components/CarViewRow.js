import PropTypes from 'prop-types';

export const CarViewRow = ({ car, onEditCar: editCar, onDeleteCar }) => {

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
        <button type="button" onClick={() => editCar(car.id)}>
          Edit
        </button>
        <button type="button" onClick={deleteCar}>
          Delete
        </button>
      </td>
    </tr>
  );
};

CarViewRow.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    color: PropTypes.string,
    price: PropTypes.number,
  }),
  onEditCar: PropTypes.func,
  onDeleteCar: PropTypes.func,
};

