export const ColorList = ({ colors, onDeleteColor: deleteColor }) => {
  return (
    <ul>
      {colors.map(c => (
        <li key={c.id}>
          {c.name}
          <button type="button" onClick={() => deleteColor(c.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};