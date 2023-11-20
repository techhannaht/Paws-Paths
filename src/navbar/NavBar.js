import { Link, useNavigate } from "react-router-dom";
import logo2 from "../image/PawsandPathsLogo.png"
import "./NavBar.css"

export const NavBar = () => {

  const navigate = useNavigate();

  return (
    <>

      <nav id="pawsnav" class="navbar" role="navigation" aria-label="main navigation">

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              <Link className='navbar__link' to='/pathboard'>
                <strong> Pathboard </strong>
              </Link>
            </a>

            <a class="navbar-item">
              <Link className='navbar__link' to='/favorites'>
                <strong>F&B Favorites</strong>
              </Link>
            </a>
            <a class="navbar-item">
              <Link className='navbar__link' to='/foundersnotes'>
                <strong>Founders Notes</strong>
              </Link>
            </a>

          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <button id="githubbutton" className="button" >
                  <span>
                    <a id="githubbutton" href="https://github.com/techhannaht"><strong>GitHub</strong></a>
                  </span>
                </button>

                <a id="logoutbutton" class="button is-light">
                  <a onClick={() => {
                    localStorage.removeItem("activeUser");
                    navigate("/", { replace: true });
                  }}>
                    <strong>Log Out</strong>
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>


  )
}


