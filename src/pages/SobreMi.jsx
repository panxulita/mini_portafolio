

import miFoto from '../assets/WhatsApp Image 2026-10-28 at 16.55.34 (2).jpeg';

function SobreMi() {
  return (
    <main className="pagina sobre-mi">
      <h1>Sobre mí</h1>

      <section className="perfil">
        <img
          src={miFoto}
          alt="Fotografía de Francisca Alvarado"
          className="foto-perfil"
        />

        <div className="perfil-texto">
          <h2>¡Hola! Soy Francisca</h2>

          <p>
            Soy estudiante de Ingeniería Civil Informática
            en la Universidad Católica de Temuco.
          </p>

          <p>
            Me interesa el desarrollo web y la programación.
            Me gusta aprender nuevas tecnologías y crear
            soluciones que mejoren la experiencia de las personas.
          </p>
        </div>
      </section>

      <section className="estudios">
        <h2>¿Qué estudio?</h2>
        <p>
          Ingeniería Civil Informática en la Universidad
          Católica de Temuco.
        </p>

        <h2>¿Qué me interesa?</h2>
        <ul>
          <li>Desarrollo web y diseño de interfaces.</li>
          <li>Programación y resolución de problemas.</li>
          <li>Aprender nuevas herramientas tecnológicas.</li>
          <li>Crear proyectos útiles e innovadores.</li>
        </ul>

        <h2>Mi objetivo</h2>
        <p>
          Seguir desarrollando mis habilidades y crear
          aplicaciones funcionales y accesibles.
        </p>
      </section>
    </main>
  );
}

export default SobreMi;
