import { CarViewRow } from "./CarViewRow";
import { CarEditRow } from "./CarEditRow";

export const CarTable = ({
  cars, editCarId,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>{editCarId > 0 ? <label htmlFor="make-input">Make</label> : 'Make'}</th>
          <th>Model</th>
          <th>Year</th>
          <th>Car</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          car.id === editCarId
            ? <CarEditRow car={car} key={car.id} onSaveCar={saveCar} onCancelCar={cancelCar} />
            : <CarViewRow car={car} key={car.id} onEditCar={editCar} onDeleteCar={deleteCar} />
        ))}
      </tbody>
    </table>
  );
};
