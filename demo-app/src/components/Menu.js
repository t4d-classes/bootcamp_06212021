import { Link } from 'react-router-dom';

export const Menu = () => {

  return (
    <nav>
      <ul className="menu">
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/color-list">Color List</Link>
        </li>
        <li className="menu-item">
          <Link to="/color-form">Color Form</Link>
        </li>
        <li className="menu-item">
          <Link to="/car-tool">Car Tool</Link>
        </li>
      </ul>
    </nav>
  );

};