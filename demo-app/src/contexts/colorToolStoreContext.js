import { createContext, useContext } from 'react';

import { useColorToolStore } from '../hooks/useColorToolStore';

const colorToolStoreContext = createContext();

export const ColorToolStoreProvider = props => {

  return (
    <colorToolStoreContext.Provider value={useColorToolStore(props.initialColors)}>
      {props.children}
    </colorToolStoreContext.Provider>
  )

};

export const useColorToolStoreContext = () => {
  return useContext(colorToolStoreContext);
};