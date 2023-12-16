import { Badge, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

  export function NavForLogin(){
    
    return(
  <nav className="navbar navbar-expand-lg  navbar bg-secondary" data-bs-theme="dark">
  <div className="container-fluid">
    {/* <NavLink className="navbar-brand" to="#">
      <img src="{logo}" alt="logo"/>
    </NavLink> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div clasNames="collapse navbar-collapse" id="navbarSupportedContent">
        
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
 <li className="nav-item">
          <h2>
        <Badge bg="secondary">Nutri Track</Badge>
      </h2>
        </li>


        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">User Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin">Admin Login</NavLink>
         </li>
     
      </ul>
      
    </div>
  </div>
</nav> 

    );
}