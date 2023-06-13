import "./Burgers.css"
import american from "../../assets/imgs/american.jpg";
import butter from "../../assets/imgs/butter.png";
import chesse from "../../assets/imgs/chesse.png"

const Burgers = () => {
  return (
        <div className="burgers-section">
            <h4 className="burgers-title">🔥NUESTRAS HAMBURGUESAS MÁS PEDIDAS🔥</h4>
            <h6 className="burgers-subtitle">Descubre nuestro <a
                    href="https://drive.google.com/file/d/1rKXbTFmGx-szr6x4YsC-pxS5K1aJSPSf/view"
                    target="_blank"
                    rel="noreferrer">MENÚ</a>✔</h6>
            <p className="burgers-description">Utilizamos un <span>Blend de Carne 🥩</span> propio y realizamos la
                producción de Medallones
                <br></br>
                <span>TODOS LOS DÍAS.</span>
                <br></br>
                <span>🥇 Priorizamos un PRODUCTO FRESCO y de PRIMERA CALIDAD🥇</span>
            </p>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={american} className="d-block w-100" alt="burgers" />
                    </div>
                    <div className="carousel-item">
                        <img src={butter} className="d-block w-100" alt="burgers" />
                    </div>
                    <div className="carousel-item">
                        <img src={chesse} className="d-block w-100" alt="burgers" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="btn-container">
                <button className="btn-menu_2">
                    <a href="https://drive.google.com/file/d/1rKXbTFmGx-szr6x4YsC-pxS5K1aJSPSf/view"
                        target="_blank" rel="noreferrer">Nuestro <span style={{color:"var(--primary-color)"}}>MENÚ</span> Completo Aquí</a>
                </button>
            </div>
        </div>
  )
}

export default Burgers