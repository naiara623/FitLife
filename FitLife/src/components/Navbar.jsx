import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="container-navbar">
      <nav className="navbar">
        <img src="src\img\logo2.png" alt="" srcset="" />
        <div className="btns-nav">
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/perfil'}>Perfil</Link></li>
            <li><Link to={'/FormularioIdoso'}>Formulario</Link></li>
            <li><Link to={'/login'} className="btn-login-newsletter">Login</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}