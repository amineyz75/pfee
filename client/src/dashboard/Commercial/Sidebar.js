import React from 'react'
 import "./Sidebar.css";
 import { Link } from "react-router-dom";
 
 import { Navbar, Container, Nav } from "react-bootstrap";
function Sidebar() {
  return (

    <>
      <div className="navigaton">
        <Navbar.Brand href="#"> </Navbar.Brand>
  <nav className="item">
    <ul className="uu">
    <li>
          <Link exact to="/Home" activeClassName="nav-active">
            Home
          </Link>
        </li>

        <li>
          <Link exact to="/Presentation" activeClassName="nav-active">
            Pres
          </Link>
        </li>

        <li>
          <Link exact to="/Adherent" activeClassName="nav-active">
            Adherent
          </Link>
        </li>
        <li>
          <Link exact to="/register" activeClassName="nav-active">
            Registration
          </Link>
        </li>
       

        </ul> 
        </nav>
      </div>
    </>
        
    
  )
}

export default Sidebar