import { Link } from "react-router-dom";
import "./homenav.css";
const HomeNav = () => {
  return (
    <>
      <div className="home-nav"></div>
      <div className="nav-content">
        <Link to="/">Home</Link>
        <Link to="/">Explore</Link>
        <Link to="/">Help</Link>
        <Link to="/">Profile</Link>
      </div>
      <div className="home-nav"></div>
    </>
  );
};

export default HomeNav;
