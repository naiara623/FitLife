import "../css/Navbar.css";
export default function Navbar() {
  return (
    <div className="container-navbar">
      <nav className="navbar">
        <h1><img src="src\img\logo2.png" alt="" srcset="" /></h1>

        <div className="btns-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
