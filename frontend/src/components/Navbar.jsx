import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navigation">
      <div className="container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/map">Map</NavLink>
        <NavLink to="/stats">Stats</NavLink>
      </div>
    </nav>
  );
}
