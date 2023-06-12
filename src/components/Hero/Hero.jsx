import "./Hero.css"

const Hero = () => {
    return (
    <section id="hero" className="hero-container">
        <div className="hero-content">
            <h1 className="hero-title">📍 Tu Hamburguesería de barrio <br/> 🍔🤝🍻</h1>
            <div className="hero-buttons">
                <button className="btn-menu">
                    HACE TU PEDIDO!
                </button>
                <button className="btn-py">
                </button>
                <button className="btn-wsp">
                    <a 
                    target="_blank"
                    href="https://web.whatsapp.com/send?phone=5491122529712&text=Holaa, ¿Cómo va? Somos BR-BURGERS, Escribe tu Pedido o Consulta aquí...%0A¡Gracias!"
                    rel="noreferrer"
                    >CONTACTO</a>
                </button>
            </div>
        </div>
    </section>
    )
}

export default Hero;