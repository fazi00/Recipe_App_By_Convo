import logo from "../../assets/CP-Logo 1.png";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <section>
        <div className="footer">
          <div className="footer-image">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="footer-content">
              <h3>All Rights Reserved</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
