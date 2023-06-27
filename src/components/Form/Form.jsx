import { useForm } from "react-hook-form";
import "./Form.css"

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    // Acceder a los valores del formulario
    console.log(data.nombre);
    console.log(data.direccion);
    console.log(data.localidad);
    console.log(data.pisoDepto);
    console.log(data.pago);
    console.log(data.turnos);
    console.log(data.envio);
  };

  return (
    <>
      <h5 className="form_title">¡Completá los datos para que preparemos tu pedido!</h5>

      <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
          <label htmlFor="aclaraciones">Aclaraciones 🍔📄</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            placeholder="Ej. sin lechuga la Bropper"
            {...register("aclaraciones", { required: false })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="nombre">Nombre 🤝</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            {...register("nombre", { required: true })}
          />
          {errors.nombre && (
            <span className="form-text text-danger">
              Completa con tu Nombre.
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="direccion">Dirección/Entre que calles? 📍</label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            {...register("direccion", { required: true })}
          />
          {errors.direccion && (
            <span className="form-text text-danger">
              Completa con tu Dirección.
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="localidad">Localidad 📍</label>
          <input
            type="text"
            className="form-control"
            id="localidad"
            {...register("localidad", { required: true })}
          />
          {errors.localidad && (
            <span className="form-text text-danger">
              Completa con tu Localidad.
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="pisoDepto">Piso/Depto 🏢</label>
          <input
            type="text"
            className="form-control"
            id="pisoDepto"
            {...register("pisoDepto")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="pago">
            Pago en Efectivo💰 o MercadoPago (7% de Recargo)?
          </label>
          <select
            id="pago"
            className="form-select"
            {...register("pago", { required: true })}
          >
            <option value=""></option>
            <option value="Efectivo">Efectivo</option>
            <option value="MP">Mercado Pago</option>
          </select>
          {errors.pago && (
            <span className="form-text text-danger">
              Debes seleccionar un Método de Pago.
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="turnos">Seleccioná el Turno ⬅️</label>
          <select
            id="turnos"
            className="form-select"
            {...register("turnos", { required: true })}
          >
            <option value=""></option>
            <option value="Turno 1: 20.00 a 21.00">Turno 1: 20.00 a 21.00</option>
            <option value="Turno 2: 21.00 a 22.00">Turno 2: 21.00 a 22.00</option>
            <option value="Turno 3: 22.00 a 23.00">Turno 3: 22.00 a 23.00</option>
            <option value="Turno 4: 23.00 a 00.00">Turno 4: 23.00 a 00.00</option>
          </select>
          {errors.turnos && (
            <span className="form-text text-danger">
              Debes seleccionar un Turno.
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="envio">Selecciona la Zona ⬅️</label>
          <select
            id="envio"
            className="form-select"
            {...register("envio", { required: true })}
          >
            <option value=""></option>
            <option value="Lo retiro por el Local ($0)">
              Lo retiro por el Local ($0)
            </option>
            <option value="V.López/Florida ($150)">
              V.López/Florida ($150)
            </option>
            <option value="Munro/F.Oeste/V.Martelli ($200)">
              Munro/F.Oeste/V.Martelli ($200)
            </option>
            <option value="Olivos ($200)">Olivos ($200)</option>
            <option value="La Lucila ($250)">La Lucila ($250)</option>
            <option value="Martinez ($300)">Martinez ($300)</option>
            <option value="Saavedra ($300)">Saavedra ($300)</option>
          </select>
          {errors.envio && (
            <span className="form-text text-danger">
              Debes seleccionar una opción.
            </span>
          )}
        </div>

        <h6 className="form_title_2">
          Gracias por elegir BR Burgers 🍔
        </h6>
        <p>          
          Martes a Domingos
          <br></br>
          De 19 a 23 hs!
        </p>

          <div className="btn_container">
            <button type="submit" className="btn-CTA">Enviar pedido</button>
          </div>
        
      </form>
    </>
  );
};

export default Form;



