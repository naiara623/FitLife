import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="container-navbar">
      <nav className="navbar">
        <img src="src\img\logo2.png" alt="" srcset="" />
        <div className="btns-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Perfil</a></li>
            <li><a href="#">Pilares</a></li>
            <li><a href="#">Depoimentos</a></li>
            <li><a href="#" className="btn-login-newsletter">Login</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}