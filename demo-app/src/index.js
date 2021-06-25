import { render } from "react-dom";

import { ColorToolStoreProvider } from './contexts/colorToolStoreContext';
import { CarToolStoreProvider } from './contexts/carToolStoreContext';
import { App } from './components/App';

const colorList = [
  { id: 1, name: "green" },
  { id: 2, name: "blue" },
  { id: 3, name: "red" },
];

const carList = [
  {
    id: 1,
    make: "Ford",
    model: "Fusion Hybrid",
    year: 2021,
    color: "blue",
    price: 45000,
  },
  {
    id: 2,
    make: "Tesla",
    model: "S",
    year: 2019,
    color: "white",
    price: 120000,
  },
];

render(<ColorToolStoreProvider initialColors={colorList}>
  <CarToolStoreProvider initialCars={carList}>
    <App />
  </CarToolStoreProvider>
</ColorToolStoreProvider>, document.querySelector("#root"));
