import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <NavLink to="">
        Home
      </NavLink>
      <NavLink to="/maps">Maps</NavLink>
    </div>
  );
}