import logo from "../../assets/imgs/logotype.png"
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  return (
    <nav id="header-navbar" className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-xxl">
        <Link className="navbar-brand" to="/">
          <img className="br-logo" src={logo} alt="BR-Burgers" width="128px" />
        </Link>
        <button id="button-toggle" className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="#hero">INICIO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#burgers">NUESTRAS BURGERS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#testimonials">RESEÑAS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#local">DONDE ESTAMOS?</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
