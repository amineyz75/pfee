import axios from "axios";
import { Axios } from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./Admin.css";
import { ToastContainer, toast } from "react-toastify";
import { faHome} from '@fortawesome/free-solid-svg-icons'
import CRUD from "./CRUD";
import { Icon } from "@material-ui/core";
import Sidebar from "./Sidebar";
import { Fragment } from "react";
import logo from '../../assets/logo.png'

export default function Commercial() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    await axios.get("http://localhost:3001/demande").then((res) => {
      setData(res.data);
    });
  });

  const nav = useNavigate();

 

  const logout = () => {
    // e.preventDefault();
    localStorage.clear();
    nav("/login");
  };
  const deleteContact = (id) => {
    if (window.confirm("are you sure to delete this user ?")) {
      console.log(id);
      axios.delete(`http://localhost:3001/delete/demande/${id}`);
      toast.success("contact deleted successfully");
      // setTimeout(()=>loadData(),500)
    }
  };
  return (

  <>
 
{/* <div style={{ marginTop: "150px" }}> */}

     {/* <Fragment>
      <CRUD/>

     </Fragment> */}
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
                  <Link to="/Commercial" className='active link'>
                    {/* <span className='las la-igloo'>
                    </span> */}
                      <span class="zmdi zmdi-view-dashboard"></span>
                    <span>Tableau de bord</span>
                  </Link>
                </li>
                <li>
                <Link to="/SuiveLesDemandes" className='active link'>
                    {/* <span className='las la-user-plus'>
                    </span> */}
                    <span class="zmdi zmdi-assignment-check"></span>

                   
                    <span>Gestion des demandes d'autorisation</span>
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
    
   
    
    {/* </div> */}
</>
      
     
   
  );
}
