import Marquee from "react-fast-marquee";
import "./Marquee.css"

const MarqueeComponent = () => {
    return (
        <Marquee speed={100} delay={1} pauseOnHover={true} gradient={true} gradientWidth={75} gradientColor={[247, 175, 56]} >
                🍔 BR-BURGERS 🍔 - 🔥 LAS MEJORES DE ZONA NORTE 🔥 - 🕒 Martes a Domingos de 12 a 15 y de 19 a 1am 🕒 - 🏍️ Delivery Propio únicamente turno noche 🏍️ - 📍 Pres. Hipólito Yrigoyen 2483, Florida 📍 - 
            💳 Aceptamos Todos los medios de pago 💳 - ❌ LUNES CERRADO ❌       
        </Marquee>
    )
}

export default MarqueeComponent;