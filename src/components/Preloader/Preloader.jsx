import "./Preloader.css";
import logo_preloader from "../../assets/imgs/logotype.png"

const Preloader = () => {
    return (
      <div className="preloader">
        <img src={logo_preloader} alt="preloader" />
        <div className="loader"></div>
      </div>
    );
}

export default Preloader;