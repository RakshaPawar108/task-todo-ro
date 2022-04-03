import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <header className="header">
        <div className="navigation-brand">
          <Link to="/">Task-ToDo-Ro</Link>
        </div>

        <ul className="navigation-items">
          <li className="navigation-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navigation-item">
            <NavLink to="/tasks">Tasks</NavLink>
          </li>
        </ul>

        <label htmlFor="check" className="bar">
          <span className="fas fa-2x fa-bars navbar-open-btn"></span>
          <span className="far fa-2x fa-times-circle navbar-close-btn"></span>
        </label>
      </header>
    </>
  );
};
