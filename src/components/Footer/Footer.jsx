import logotype from "../../assets/imgs/logotype.png"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
    <div className="logotype">
        <img src={logotype} alt="BR-Burgers" width="136px" />
    </div>
    <p className="footer-text_1">BR BURGERS | TODOS LOS DERECHOS RESERVADOS ©2023</p>
    <p className="footer-text_2"><span>Contacto Comercial:</span><br/>Ramiro.fd@hotmail.com</p>
    <p className="development"> Design & Development by <a href="https://www.linkedin.com/in/jonathan-guidi-329365217/"
            target="_blank" rel='noreferrer'><strong>@jonaaguidi</strong></a></p>
    </footer>
  )
}

export default Footer;