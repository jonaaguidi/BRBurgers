import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div style={{ height: "90vh", color: "white", textAlign: "center", marginTop: "80px", fontFamily: "FloridaProject", letterSpacing: "1.5px" }}>
      LO SIENTO... 
      <br></br> 
      LA DIRRECCIÓN SOLICITADA ES INVALIDA.
      <br></br>
      <button style={{ padding: "8px", backgroundColor: "var(--primary-color)", width: "180px", margin: "0 auto", marginTop: "12px", border: "none", borderRadius: "20px" }}>
        <Link style={{ color: "BLACK" }} to="/">
          Volver al Inicio
        </Link>
      </button>
    </div>
  )
}

export default Error;