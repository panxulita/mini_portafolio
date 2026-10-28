
import TarjetaProyecto from "../components/TarjetaProyecto";

const proyectos = [
  {
    titulo: "Calculadora de límites",
    descripcion:
      "Herramienta académica para practicar el cálculo de límites matemáticos. Proyecto relacionado con los contenidos de Cálculo.",
    enlace: ""
  },
  {
    titulo: "Café Aroma",
    descripcion:
      "Página web desarrollada con HTML y CSS para practicar estructura, estilos y diseño frontend.",
    enlace: ""
  },
  {
    titulo: "Mini portafolio",
    descripcion:
      "Portafolio personal desarrollado con React, componentes reutilizables y navegación entre páginas.",
    enlace: ""
  }
];

function Proyectos() {
  return (
    <main className="pagina">
      <h1>Mis proyectos</h1>

      <section className="lista-proyectos">
        {proyectos.map((proyecto) => (
          <TarjetaProyecto key={proyecto.titulo} {...proyecto} />
        ))}
      </section>
    </main>
  );
}

export default Proyectos;