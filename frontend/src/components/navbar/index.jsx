import { NavLink } from "react-router-dom";
import { NAVBAR } from "./styled";

export const Navbar = () => {
  const handleIsActive = ({ isActive }) => {
    return isActive ? { color: "yellow", fontWeight: "bold" } : null;
  };

  const navLinks = [
    { path: "/", title: "home" },
    { path: "/products", title: "products" },
    { path: "categories", title: "categories" },
    { path: "/images", title: "images" },
  ];

  return (
    <NAVBAR>
      {navLinks.map(({ path, title }, i) => (
        <NavLink key={i} style={handleIsActive} to={path}>
          {title}
        </NavLink>
      ))}
    </NAVBAR>
  );
};
