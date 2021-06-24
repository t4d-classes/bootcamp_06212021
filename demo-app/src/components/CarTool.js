import { useCarToolStore } from '../hooks/useCarToolStore';

import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

export const CarTool = ({cars: initialCars }) => {

  const { cars, editCarId, addCar, saveCar, deleteCar, editCar, cancelCar } = useCarToolStore(initialCars);

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
