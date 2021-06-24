
export const ToolFooter = ({ companyName }) => {

  return (
    <footer>
      <small>&copy; {new Date().getFullYear()}. {companyName}</small>
    </footer>
  );

};