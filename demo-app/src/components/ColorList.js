export const ColorList = ({ colors }) => {
  return (
    <ul>
      {colors.map(c => (
        <li key={c.id}>{c.name}</li>
      ))}
    </ul>
  );
};