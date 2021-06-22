// import React from 'react';
import { render } from "react-dom";

import { ColorTool } from "./components/ColorTool";
import { CarTool } from "./components/CarTool";

// delete item from an array
const nums = [1, 2, 3, 4, 5];

const nums2 = nums.filter((x) => x !== 2);

console.log(nums);
console.log(nums2);


// functions are objects, and assigning object references and invoking functions
const t = () => { console.log('hi!') };

const y = t;

t();
y();

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

const elements = (
  <>
    <ColorTool colors={colorList} />
    <CarTool cars={carList} />
  </>
);

render(elements, document.querySelector("#root"));
