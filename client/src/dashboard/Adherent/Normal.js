import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router";
import logo from '../../assets/logo.png'

//import "./Normal.css";

import { Navbar, Container, Nav} from "react-bootstrap";
import axios from "axios";

const Normal = () => {


  return (
    <>
      {/* <div className="navigaton">
      
      <Link to="/Suivie ">
           <div className="btn btn-edit">
           Consulter
           </div>
           </Link>
        <br></br>
        <Link to="/Demande ">
           <div className="btn btn-edit">
               Ajouter une demande
           </div>
           </Link>
           <br></br>
        <Link to="/Feedback">
           <div className="btn btn-delete">
               Poser une question
           </div>
           </Link>
           <br></br>
        <Link to="/AdherentFeedback">
           <div className="btn btn-delete">
              Consulter Feedback
           </div>
           </Link>
       
      </div> */}
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
                  <Link to="/Normal" className='active link'>
                    {/* <span className='las la-igloo'>
                    </span> */}
                     <span class="zmdi zmdi-view-dashboard"></span>

                    <span>Tableau de bord</span>
                  </Link>
                </li>
                <li>
                <Link to="/MesDonnees" className='active link'>
                    {/* <span className='las la-users'>
                    </span> */}
                    <span class="zmdi zmdi-file-text"></span>

                    <span> Mes information</span>
                  </Link>
                </li>
                <li>
                <Link to="/Demande" className='active link'>
                    {/* <span className='las la-users'>
                    </span> */}
                    <span class="zmdi zmdi-file-text"></span>

                    <span> Ajouter une demande</span>
                  </Link>
                </li>
                <li>
                <Link to="/Suivie" className='active link'>
                    {/* <span className='las la-user-plus'>
                    </span> */}
                                        <span class="zmdi zmdi-assignment-check"></span>

                   
                    <span>Suivie Demande</span>
                  </Link>
                </li>
                <li>
                <Link to="/Feedback" className='active link '>
                <span class="zmdi zmdi-comments"></span>

                    <span className='boite'>poser une question</span>  
                    
                  </Link>
                </li>
                <li>
                <Link to="/BoiteReception" className='active link '>
                    {/* <span className='las la-envelope-open-text'>
                    </span> */}
                    <span class="zmdi zmdi-email-open"></span>

                    <span className='boite'>Boite de reception</span>     
                    
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
  );
};
export default Normal;
