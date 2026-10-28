
import { useState } from "react";

function FormularioContacto() {
  const [datos, setDatos] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });

  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  function manejarCambio(event) {
    const { name, value } = event.target;

    setDatos({
      ...datos,
      [name]: value
    });
  }

  function manejarEnvio(event) {
    event.preventDefault();

    const nuevosErrores = {};

    if (!datos.nombre.trim()) {
      nuevosErrores.nombre = "Ingresa tu nombre.";
    }

    if (!datos.correo.trim()) {
      nuevosErrores.correo = "Ingresa tu correo.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo)) {
      nuevosErrores.correo = "Ingresa un correo válido.";
    }

    if (!datos.mensaje.trim()) {
      nuevosErrores.mensaje = "Escribe un mensaje.";
    }

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length > 0) {
      setEnviado(false);
      return;
    }

    setEnviado(true);
    setDatos({
      nombre: "",
      correo: "",
      mensaje: ""
    });
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio} noValidate>
      <label htmlFor="nombre">Nombre</label>
      <input
        id="nombre"
        name="nombre"
        value={datos.nombre}
        onChange={manejarCambio}
      />
      {errores.nombre && <p className="error">{errores.nombre}</p>}

      <label htmlFor="correo">Correo electrónico</label>
      <input
        id="correo"
        name="correo"
        type="email"
        value={datos.correo}
        onChange={manejarCambio}
      />
      {errores.correo && <p className="error">{errores.correo}</p>}

      <label htmlFor="mensaje">Mensaje</label>
      <textarea
        id="mensaje"
        name="mensaje"
        value={datos.mensaje}
        onChange={manejarCambio}
        rows="5"
      />
      {errores.mensaje && <p className="error">{errores.mensaje}</p>}

      <button type="submit">Enviar mensaje</button>

      {enviado && (
        <p role="status">
          ¡Mensaje validado correctamente! Gracias por contactarme.
        </p>
      )}
    </form>
  );
}

export default FormularioContacto;
