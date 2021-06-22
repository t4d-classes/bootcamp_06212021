import { useState } from "react";

import { ColorForm } from "./ColorForm";

export const ColorTool = ({ colors: initialColors }) => {

  const [colors, setColors] = useState([...initialColors]);

  const addColor = (newColor) => {
    setColors([
      // array spread operator
      ...colors,
      {
        // object spread operator
        ...newColor,
        id: Math.max(...colors.map((c) => c.id)) + 1,
      },
    ]);
  };

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
      <ColorForm buttonText="Add Color" onSubmitForm={addColor} />
    </>
  );
};
