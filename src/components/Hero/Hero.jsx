import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">📍 Tu Hamburguesería de barrio <br /> 🍔🤝🍻</h1>
        <div className="hero-buttons">
          <button className="btn-menu">
            <Link to="/App">
              HACE TU PEDIDO!
            </Link>
          </button>
          <button className="btn-py">
            <Link to="https://www.pedidosya.com.ar/restaurantes/vicente-lopez/br-burgers-menu" target="_blank" rel="noreferrer">
            </Link>
          </button>
          <button className="btn-wsp">
            <Link to="https://wa.me/5491122529712?text=Holaa,%20%C2%BFC%C3%B3mo%20va?%20Somos%20BR-BURGERS,%20Escribe%20tu%20Pedido%20o%20Consulta%20aqu%C3%AD...%0A%C2%A1Gracias!" target="_blank" rel="noreferrer">
              CONTACTO
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;


