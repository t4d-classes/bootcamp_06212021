import { useCarToolStoreContext } from '../contexts/carToolStoreContext';

import { ToolHeader } from "../components/ToolHeader";
import { CarTable } from "../components/CarTable";
import { CarForm } from "../components/CarForm";

export const CarToolContainer = () => {

  const { 
    cars, editCarId,
    addCar, saveCar, deleteCar,
    editCar, cancelCar,
  } = useCarToolStoreContext();

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={editCar} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
};
