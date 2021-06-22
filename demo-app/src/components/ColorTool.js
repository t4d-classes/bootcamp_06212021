import { useState } from "react";

export const ColorTool = ({ colors: initialColors }) => {
  // setColorForm - update the state date, and it will trigger the re-render

  const [colors, setColors] = useState([...initialColors]);

  const [
    colorForm /* state data */,
    setColorForm /* function to update the state data */,
  ] = useState({
    name: "",
    hexcode: "",
  });

  const change = (e) => {
    setColorForm({
      ...colorForm,
      [e.target.name]: e.target.value,
    });
  };

  const addColor = () => {
    setColors([
      // array spread operator
      ...colors,
      {
        // object spread operator
        ...colorForm,
        id: Math.max(...colors.map((c) => c.id)) + 1,
      },
    ]);

    setColorForm({
      name: "",
      hexcode: "",
    });
  };

  console.log(colorForm);
  console.log("re-rendering");

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
      <form>
        <div>
          <label htmlFor="color-name-input">Color Name</label>
          <input
            type="text"
            id="color-name-input"
            value={colorForm.name}
            onChange={change}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="color-hexcode-input">Color Hexcode</label>
          <input
            type="text"
            id="color-hexcode-input"
            value={colorForm.hexcode}
            onChange={change}
            name="hexcode"
          />
        </div>
        <button type="button" onClick={addColor}>
          Add Color
        </button>
      </form>
    </>
  );
};
