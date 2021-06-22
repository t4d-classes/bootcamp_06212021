// import React from 'react';
import { render } from "react-dom";

import { ColorTool } from "./components/ColorTool";
import { CarTool } from "./components/CarTool";

const colorList = [
  { id: 1, name: "green" },
  { id: 2, name: "blue" },
  { id: 3, name: "red" },
];

const elements = (
  <>
    {/* React.createElement(ColorTool, { colors: colorList }) */}
    <ColorTool colors={colorList} />
    <ColorTool colors={colorList} />
    <CarTool />
  </>
);

render(elements, document.querySelector("#root"));
