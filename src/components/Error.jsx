import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div style={{ height: "80vh", color: "white", textAlign: "center", marginTop: "36px" }}>
      Lo siento... La dirección que solicitaste es invalida
      <br></br>
      <button style={{ padding: "8px", backgroundColor: "var(--primary-color)", width: "180px", margin: "0 auto", marginTop: "12px", border: "none", borderRadius: "20px" }}>
        <Link style={{ color: "white" }} to="/">
          Volver al Inicio
        </Link>
      </button>
    </div>
  )
}

export default Error;