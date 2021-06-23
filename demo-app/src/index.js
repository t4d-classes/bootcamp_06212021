// import React from 'react';
import { render } from "react-dom";

import { ColorTool } from "./components/ColorTool";
import { CarTool } from "./components/CarTool";


const fn1 = () => 4;
const fn2 = () => 5;

const r = true ? (false ? fn1() : -1) : fn2();

console.log(r); // 5

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
