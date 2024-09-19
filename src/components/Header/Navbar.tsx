import { Link } from "react-router-dom";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import "./navbar.css";

const navLinks = [
  {
    path: "",
    display: "COMMUNITY",
  },
  {
    path: "",
    display: "BOOKS",
  },
  {
    path: "",
    display: "RECIPE INDEX",
  },
  {
    path: "",
    display: "POPULAR",
  },
];
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.display}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-end">
          <Link to="register">
            <FaArrowRightToBracket />
            <span>Register</span>
          </Link>

          <Link to="login">
            <FaUser />
            <span>Login</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
