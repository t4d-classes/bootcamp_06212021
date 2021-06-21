export const ColorTool = () => {
  const colors = [
    { id: 1, name: "green" },
    { id: 2, name: "blue" },
    { id: 3, name: "red" },
  ];

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

  const colorItems = colors.map(fn);

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>{colorItems}</ul>
    </>
  );
};
