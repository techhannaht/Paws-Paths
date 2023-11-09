import { Link, useNavigate } from "react-router-dom";
import logo2 from "../image/PawsandPathsLogo.png"
import "./NavBar.css"

export const NavBar = () => {

  const navigate = useNavigate();

  return (
    <nav class="level">
      <p class="level-item has-text-centered">
        <button id="dashbutton" className="button">
          <Link className='navbar__link' to='/dashboard'>
            <strong> Dashboard </strong>
          </Link>
        </button>
      </p>
      <p class="level-item has-text-centered">
        <button id="dashbutton" className="button">
          <Link className='navbar__link' to='/foundersnotes'>
            <strong>Founders Notes</strong>
          </Link>
        </button>
      </p>
      <p class="level-item has-text-centered">
        <img src={logo2} alt="" />
      </p>
      <p class="level-item has-text-centered">
        <button id="dashbutton" className="button">
          <Link className='navbar__link' to='/morepaths'>
            <strong>More Paths</strong>
          </Link>
        </button>
      </p>
      <p class="level-item has-text-centered">
        <div class="buttons">
          <a id="logoutbutton" class="button is-warning" onClick={() => {
            localStorage.removeItem("activeUser");
            navigate("/", { replace: true });
          }}>
            <strong>Log Out</strong>
          </a>
        </div>
      </p>
    </nav>
  )
}

{/* <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="">
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        <Link className='navbar__link' to='/dashboard'>
          Dashboard
        </Link>
      </a>
      <a class="navbar-item">
        <Link className='navbar__link' to='/foundersnotes'>
          Founders Notes
        </Link>
      </a>

    </div>
  </div>

  <div class="navbar-end">
    <div class="navbar-item">
      <div class="buttons">
        <a class="button is-warning" onClick={() => {
          localStorage.removeItem("activeUser");
          navigate("/", { replace: true });
        }}>
          <strong>Log Out</strong>
        </a>
      </div>
    </div>
  </div>
</nav> */}


