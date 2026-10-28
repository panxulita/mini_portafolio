
const habilidades = [
  { nombre: "HTML", nivel: 90 },
  { nombre: "CSS", nivel: 80 },
  { nombre: "JavaScript", nivel: 65 },
  { nombre: "React", nivel: 50 },
  { nombre: "Python", nivel: 75 },
  { nombre: "SQL", nivel: 70 }
];

const herramientas = ["Git", "GitHub", "VS Code", "Node.js"];

function Habilidades() {
  return (
    <main className="pagina">
      <h1>Habilidades y Lenguajes</h1>

      <h2>Tecnologías</h2>

      <section className="grid-habilidades">
        {habilidades.map((habilidad) => (
          <article className="tarjeta-habilidad" key={habilidad.nombre}>
            <h3>{habilidad.nombre}</h3>
            <p>Nivel: {habilidad.nivel}%</p>

            <div className="barra">
              <div
                className="progreso"
                style={{ width: `${habilidad.nivel}%` }}
              ></div>
            </div>
          </article>
        ))}
      </section>

      <h2>Herramientas</h2>

      <ul>
        {herramientas.map((herramienta) => (
          <li key={herramienta}>{herramienta}</li>
        ))}
      </ul>
    </main>
  );
}

export default Habilidades;
