import { NavLink } from 'react-router-dom';

  export function NavigationBar(){
    
    return (
      <nav
        className="navbar navbar-expand-lg  navbar text-white bg-dark bg-gradient"
        data-bs-theme="dark"
      >
        {/* <div className="container-fluid"> */}
        {/* <NavLink className="navbar-brand" to="#">
      <img src="{logo}" alt="logo"/>
    </NavLink> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div clasNames="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/dashboard"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contacts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Registration
              </NavLink>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </nav>
    );
}