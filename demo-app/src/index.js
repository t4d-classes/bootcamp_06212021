// import React from 'react';
import { render } from "react-dom";

import { ColorTool } from "./components/ColorTool";
import { CarTool } from "./components/CarTool";

const elements = (
  <>
    <ColorTool />
    <CarTool />
  </>
);

render(elements, document.querySelector("#root"));
