import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {

    const navigate = useNavigate();


    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="">
            <img src="../src/images/Paws&Paths.png" width="112" height="28"/>
          </a>
      </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
            Founders Notes
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
      </nav>

    )
}
