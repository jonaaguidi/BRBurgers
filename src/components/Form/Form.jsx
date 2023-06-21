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
    console.log(data.turnos)

  };

  return (
    <>
      <h5 className="form_title">¡Completá los datos para que preparemos tu pedido!</h5>
      <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            {...register("nombre", { required: true })}
          />
          {errors.nombre && <span>Completa con tu Nombre.</span>}
        </div>

        <div>
          <label htmlFor="direccion">Dirección/Entre que calles?</label>
          <input
            type="text"
            id="direccion"
            {...register("direccion", { required: true })}
          />
          {errors.direccion && <span>Completa con tu Dirección.</span>}
        </div>

        <div>
          <label htmlFor="localidad">Localidad</label>
          <input
            type="text"
            id="localidad"
            {...register("localidad", { required: true })}
          />
          {errors.localidad && <span>Completa con tu Localidad.</span>}
        </div>

        <div>
          <label htmlFor="pisoDepto">Piso/Depto</label>
          <input
            type="text"
            id="pisoDepto"
            {...register("pisoDepto")}
          />
        </div>

        <div>
          <label htmlFor="pago">Pago en efectivo o MercadoPago (7% de Recargo) ?</label>
          <select id="pago" {...register("pago", { required: true })}>
            <option value=""></option>
            <option value="efectivo">Efectivo</option>
            <option value="mp">Mercado Pago</option>
          </select>
          {errors.pago && <span>Debes seleccionar un Metodo de Pago.</span>}
        </div>

        <div>
          <label htmlFor="turnos">Selecciona el Turno</label>
          <select id="turnos" {...register("turnos", { required: true })}>
            <option value=""></option>
            <option value="Turno 1: 20.00 a 21.00">Turno 1: 20.00 a 21.00</option>
            <option value="Turno 2: 21.00 a 22.00">Turno 2: 21.00 a 22.00</option>
            <option value="Turno 3: 22.00 a 23.00">Turno 3: 22.00 a 23.00</option>
            <option value="Turno 4: 23.00 a 00.00">Turno 4: 23.00 a 00.00</option>
          </select>
          {errors.turno && <span>Debes seleccionar una Turno</span>}
        </div>

        <div>
          <label htmlFor="envio">Selecciona la Zona</label>
          <select id="envio" {...register("envio", { required: true })}>
            <option value=""></option>
            <option value="Lo retiro por el Local ($0)">Lo retiro por el Local ($0)</option>
            <option value="V.López/Florida ($150)">V.López/Florida ($150)</option>
            <option value="Munro/F.Oeste/V.Martelli ($200)">Munro/F.Oeste/V.Martelli ($200)</option>
            <option value="Olivos ($200)">Olivos ($200)</option>
            <option value="La Lucila ($250)">La Lucila ($250)</option>
            <option value="Martinez ($300)">Martinez ($300)</option>
            <option value="Saavedra ($300)">Saavedra ($300)</option>

          </select>
          {errors.turno && <span>Debes seleccionar una opción</span>}
        </div>

        <button>Enviar</button>
      </form>
    </>
  );
};

export default Form;


