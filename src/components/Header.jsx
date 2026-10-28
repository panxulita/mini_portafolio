
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/" end className="logo">
          MiPortafolio
        </NavLink>

        <div className="menu">
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/sobre-mi">Sobre mí</NavLink>
          <NavLink to="/habilidades">Habilidades</NavLink>
          <NavLink to="/proyectos">Proyectos</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;