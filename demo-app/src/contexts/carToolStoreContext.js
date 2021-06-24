import { createContext, useContext } from 'react';

import { useCarToolStore } from '../hooks/useCarToolStore';

const carToolStoreContext = createContext();

export const CarToolStoreProvider = props => {

  return (
    <carToolStoreContext.Provider value={useCarToolStore(props.initialCars)}>
      {props.children}
    </carToolStoreContext.Provider>
  )

};

export const useCarToolStoreContext = () => {
  return useContext(carToolStoreContext);
};