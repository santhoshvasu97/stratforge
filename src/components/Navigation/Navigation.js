import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink exact to="/rockets" activeClassName="active">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink to="/launches" activeClassName="active">
            Launches
          </NavLink>
        </li>
        <li>
          <NavLink to="/history" activeClassName="active">
            History
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
