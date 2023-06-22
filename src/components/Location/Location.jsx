import LocalBR from "../../assets/imgs/local.jpg"
import "./Location.css"

const Location = () => {
    return (
        <div id="local" className="local-section">
            <h4 className="local-title">📍 CONOCE NUESTRO LOCAL </h4>
            <h6 className="local-subtitle">Proba no solo nuestras <strong>BURGERS🍔</strong><br></br> Sino tambien nuestras
                <strong> CERVEZAS🍻 y TRAGOS🍸</strong>
            </h6>
            <h5 className="ubi-title"> Hipólito Yrigoyen 2483, Florida. </h5>
            <div className="local-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13148.208394992462!2d-58.4976617!3d-34.526908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb12ac7de2707%3A0x704423c3a2da747d!2sBR%20Burgers!5e0!3m2!1ses-419!2sar!4v1679411913787!5m2!1ses-419!2sar"
                    width="320" height="250" style={{border:0}} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                <img src={LocalBR} alt="Local" width="320" height="200" />
            </div>
        </div>
    )
}

export default Location;