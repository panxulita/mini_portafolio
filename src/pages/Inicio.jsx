
import { Link } from "react-router-dom";
import fotoInicio from "../assets/WhatsApp Image 2026-10-28 at 16.55.34.jpeg";

function Inicio() {
  return (
    <main className="inicio">
      <section className="hero">
        <div className="hero-imagen">
          <img src={fotoInicio} alt="Francisca en una fotografía frente al espejo" />
        </div>

        <div className="hero-texto">
          <h1>Hola, soy Francisca Alvarado</h1>
          <h2>Estudiante de Ingeniería Civil Informática</h2>

          <p>
            Bienvenida a mi portafolio.
            <br />
            Aquí puedes conocer más sobre mí,
            <br />
            mis habilidades y proyectos.
          </p>

          <Link to="/sobre-mi" className="boton">
            Explorar
          </Link>
        </div>
      </section>

      <section className="destacados">
        <article className="destacado">
          <span className="icono">&lt;/&gt;</span>
          <h3>Desarrollo<br />Frontend</h3>
        </article>

        <article className="destacado">
          <span className="icono">▣</span>
          <h3>Proyectos<br />Reales</h3>
        </article>

        <article className="destacado">
          <span className="icono">♧</span>
          <h3>Aprendizaje<br />Continuo</h3>
        </article>

        <article className="destacado">
          <span className="icono">★</span>
          <h3>Compromiso<br />y Pasión</h3>
        </article>
      </section>
    </main>
  );
}

export default Inicio;