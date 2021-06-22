export const ColorTool = (props) => {
  const fn = (color) => {
    // key needs to be unique value for each model
    return <li key={color.id}>{color.name}</li>;
  };

  const colorItems = props.colors.map(fn);

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>{colorItems}</ul>
    </>
  );
};
