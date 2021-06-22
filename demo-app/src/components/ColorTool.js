export const ColorTool = (props) => {
  //   props.colors.push({
  //     id: 4,
  //     name: "purple",
  //   });

  //   props.colors = [];
  props.newProp = "test";

  //   const colorItems = [];

  //   for (let x = 0; x < colors.length; x++) {
  //     colorItems.push(<li>{colors[x]}</li>);
  //   }

  //   colors.forEach((color) => {
  //     console.log(color);
  //   });

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
