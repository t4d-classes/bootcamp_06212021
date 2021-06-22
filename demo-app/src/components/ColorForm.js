import { useState } from "react";

export const ColorForm = ({ onSubmitForm, buttonText }) => {
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

  const submitForm = () => {
    onSubmitForm(colorForm);

    setColorForm({
      name: "",
      hexcode: "",
    });
  };

  return (
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
      <button type="button" onClick={submitForm}>
        {buttonText}
      </button>
    </form>
  );
};

ColorForm.defaultProps = {
  buttonText: "Submit Color",
};
