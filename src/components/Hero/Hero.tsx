import hero from "../../assets/hero.png";
import "./hero.css";

const Hero = () => {
  return (
    <section>
      <div className="hero">
        <div className="hero-image">
          <img src={hero} alt="" />
        </div>
        <div className="hero-content">
          <h3>Food Diary</h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
