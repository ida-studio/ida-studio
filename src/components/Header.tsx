import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">

      <nav className="nav-left">
        <a href="#">Tienda</a>
        <a href="#">Servicios</a>
        <a href="#">Acerca de</a>
        <a href="#">Contacto</a>
      </nav>

      <div className="nav-center">
        <img src={logo} alt="IDA Studio" className="logo-img" />
      </div>

      <div className="nav-right">
        <button>@</button>
        <button>ig</button>
      </div>

    </header>
  );
}