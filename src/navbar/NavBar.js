import { Link, useNavigate } from "react-router-dom";
import logo2 from "../image/PawsandPathsLogo.png"
import "./NavBar.css"

export const NavBar = () => {

  const navigate = useNavigate();

  return (
    <nav className="level">
      <p className="level-item has-text-centered">
        <button id="dashbutton" className="button">
          <Link className='navbar__link' to='/dashboard'>
            <strong> Dashboard </strong>
          </Link>
        </button>
      </p>
      <p className="level-item has-text-centered">
        <button id="dashbutton" className="button">
          <Link className='navbar__link' to='/morepaths'>
            <strong>More Paths</strong>
          </Link>
        </button>
      </p>
      <p className="level-item has-text-centered">
        <img src={logo2} alt="" />
      </p>
      <p className="level-item has-text-centered">
        <button id="dashbutton" className="button">
          <Link className='navbar__link' to='/foundersnotes'>
            <strong>Founders Notes</strong>
          </Link>
        </button>
      </p>
      <p className="level-item has-text-centered">
        <div className="buttons">
          <a id="logoutbutton" className="button is-warning" onClick={() => {
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


