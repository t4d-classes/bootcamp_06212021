import { useState } from "react";

import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from "./ColorForm";

export const ColorTool = ({ colors: initialColors }) => {

  const [colors, setColors] = useState([...initialColors]);

  const addColor = (newColor) => {
    setColors([
      ...colors,
      {
        ...newColor,
        id: Math.max(...colors.map((c) => c.id)) + 1,
      },
    ]);
  };

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} />
      <ColorForm buttonText="Add Color" onSubmitForm={addColor} />
    </>
  );
};
