import axios from "axios";
import { Axios } from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./Admine.css";
import logo from '../../assets/logo.png'


function Admine() {
    const [data, setData] = useState([]);
    useEffect(async () => {
      await axios.get("http://localhost:3001/select/users").then((res) => {
        setData(res.data);
      });
    });
  
    const nav = useNavigate();
    const deleteContact = (id) => {
        if (window.confirm("are you sure to delete this user ?")) {
          console.log(id);
          axios.delete(`http://localhost:3001/delete/user/${id}`);
        
        }
      };
  return (
      //   <div className="navigaton">
      // <center><h1>Admin dashboard</h1></center>
      // <Link to="/AddAdmin ">
      //      <div className="btn btn-delete">
      //          Add new Admin
      //      </div>
      //      </Link>
      //   <br></br>
      //   <Link to="/SuivieFeedback ">
      //      <div className="btn btn-delete">
      //          Feedback
      //      </div>
      //      </Link>
      //      <br></br>
      //   <Link to="/GererUtilisateur ">
      //      <div className="btn btn-delete">
      //      Gerer Utilisateur
      //      </div>
      //      </Link>
       
      // </div>
  //     <>
  //     <div className="navigaton">
  //       <Navbar.Brand href="#"> </Navbar.Brand>
  // <nav className="item">
    
  //   <ul className="uu">

  //   <li>
  //         <Link exact to="/AddAdmin" activeClassName="nav-active">
  //         AddAdmin
  //         </Link>
  //       </li>
  //       <br></br>
  //       <li>
  //         <Link exact to="/SuivieFeedback" activeClassName="nav-active">
  //         SuivieFeedback
  //         </Link>
  //       </li>
  //       <br></br>

  //       <li>
  //         <Link exact to="/GererUtilisateur" activeClassName="nav-active">
  //         GererUtilisateur
  //         </Link>
  //       </li>
        

  //       </ul> 
  //       </nav>
  //       <center><h1>admin dashboard</h1></center>

  //     </div>
  //   </>
  <>
   <div className='header'>
      <div className='search-wrapper'>
        <span className='las la-search'></span>
        <input type='search' placeholder='Search here' />
      </div>
  
      <div className='user-wrapper'>
  
        <div>
         
          <small> Ravi de vous revoir !</small>
        </div>
  
      </div>
  
    </div>
    <div className='sidebar'>
            <div className='sidebar-brand'>
            <h1><span className='las la-accusoft'></span><img className='img' src={logo}/></h1>
            </div>
            <div className='sidebar-menu'>
              <ul>
                <li>
                  <Link to="/Admine" className='active link'>
                  <span class="zmdi zmdi-view-dashboard"></span>

                    <span>Tableau de bord</span>
                  </Link>
                </li>
                <li>
                <Link to="/GererUtilisateur" className='active link'>
                    {/* <span className='las la-user-plus'>
                    </span> */}
                    <span class="zmdi zmdi-accounts-alt"></span>

                   
                    <span>Gerer les utilisateurs</span>
                  </Link>
                </li>
                <li>
                <Link to="/SuivieFeedback" className='active link'>
                    {/* <span className='las la-users'>
                    </span> */}
                   <span class="zmdi zmdi-email-open"></span>

                    <span> Boite de reception</span><p className='notif'>0</p>
                  </Link>
                </li>
              
                <li>
                <Link to="/AddAdmin" className='active link '>
                    {/* <span className='las la-envelope-open-text'>
                    </span> */}
                    <span class="zmdi zmdi-account-add"></span>

                    <span className='boite'>Ajouter un admin</span>   
                    
                  </Link>
                </li>
                <li className='logout'>
                <button  id="btn"className='active link' >
                    {/* <span className='la la-sign-out-alt'>
                    </span> */}
                      <span class="zmdi zmdi-close"></span>

                    <span>Se déconnecter</span>
                  </button>
                </li>
                
              </ul>
    
            </div>
          </div>
    
  
  </>
  )
}

export default Admine