import { useState } from "react";

export const ColorTool = ({ colors }) => {
  // setColorForm - update the state date, and it will trigger the re-render

  const [
    colorForm /* state data */,
    setColorForm /* function to update the state data */,
  ] = useState(
    {
      colorName: "",
      colorHexcode: "",
    } /* initial state data */
  );

  const change = (e) => {
    setColorForm({
      ...colorForm,
      [e.target.name]: e.target.value,
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
            value={colorForm.colorName}
            onChange={change}
            name="colorName"
          />
        </div>
        <div>
          <label htmlFor="color-hexcode-input">Color Hexcode</label>
          <input
            type="text"
            id="color-hexcode-input"
            value={colorForm.colorHexcode}
            onChange={change}
            name="colorHexcode"
          />
        </div>
      </form>
    </>
  );
};
