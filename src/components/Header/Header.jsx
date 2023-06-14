import { Link as ScrollLink } from 'react-scroll';
import logo from "../../assets/imgs/logotype.png";
import "./Header.css";

const Header = () => {
  return (
    <nav id="header-navbar" className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-xxl">
        <ScrollLink className="navbar-brand" to="hero" smooth={true} duration={500}>
          <img className="br-logo" src={logo} alt="BR-Burgers" width="128px" />
        </ScrollLink>
        <button id="button-toggle" className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <ScrollLink className="nav-link" to="hero" smooth={true} duration={500}>INICIO</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="burgers" smooth={true} duration={500}>NUESTRAS BURGERS</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="testimonials" smooth={true} duration={500}>RESEÑAS</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="local" smooth={true} duration={500}>DONDE ESTAMOS?</ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
