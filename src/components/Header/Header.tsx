import logo from "../../assets/CP-Logo 1.png";
import { CiSearch } from "react-icons/ci";

import "./header.css";
import Hero from "../Hero/Hero";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import HomeNav from "../HomeNavbar/HomeNav";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      {/* Nav Links */}
      <header>
        <Navbar />

        <section>
          <div className="header-section">
            <div className="header-logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>

            {isHomePage && (
              <div className="header-search-bar">
                <div className="category-tag">
                  <span>All Categories</span>
                </div>
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search"
                />

                <span className="search-icon">
                  <CiSearch />
                </span>
              </div>
            )}
          </div>
        </section>
      </header>

      {/* Hero Section */}
      <section>
        <Hero />
      </section>

      {/* Home Navbar */}
      <section>
        <HomeNav />
      </section>
    </>
  );
};

export default Header;
