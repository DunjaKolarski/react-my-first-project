import dogSpa1 from "../assets/dog-bath-1.jpg";
import dogSpa2 from "../assets/dog-bath-2.jpg";
import dogSpa3 from "../assets/dog-bath-3.jpg";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to PawSpa</h1>
        <p>Your dog's spa experience starts here!</p>
        <button>Book an Appointment</button>
      </div>
      <div className="spa-pictures">
        <img src={dogSpa1} alt="dog spa 1" />
        <img src={dogSpa2} alt="dog spa 2" />
        <img src={dogSpa3} alt="dog spa 3" />
      </div>
    </section>
  );
}

export default Hero;
