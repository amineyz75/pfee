import React ,{useState,useEffect} from 'react'
import {useParams,Link} from "react-router-dom"
import axios from 'axios'
import "./Vieww.css";
import Commercial from './Commercial';

function Vieww() {
    const[user,setUser]=useState({})
    const{id}=useParams();
    useEffect(async () => {
        await axios
          .get(`http://localhost:3001/AfficheUneSeuleDemande/${id}`)
          .then((resp)=>setUser({ ...resp.data[0]}))
            
      }, [id]);
    
  return (
      <>
      <Commercial/>
    <div style={{marginTop:"40px" , marginLeft:"150px"}}>
        <div className='card'>
        <div className="card-header">
            <p>Les données d'une demande d'autorisation</p>
        </div>
        <div className='container'>
           <strong>ID :</strong> 
           <span>{id}</span>
           <br />
           <br />
           <strong>Adherent:</strong> 
           <span>{user.adherent}</span>
           <br />
           <br />
           <strong>Tire nom:</strong> 
           <span>{user.nom}</span>
           <br />
           <br />
           <strong>Identi:</strong> 
           <span>{user.ident}</span>
           <br />
           <br />
           <strong>Rib :</strong> 
           <span>{user.rib}</span>
           <br />
           <br />
           <strong>Chifrre d'affaire:</strong> 
           <span>{user.ca}</span>
           <br />
           <br />
           <strong>Encours demandé :</strong> 
           <span>{user.encours}</span>
           <br />
           <br />
           <strong>Mode de payement :</strong> 
           <span>{user.mode}</span>
           <br />
           <br />
           <strong>Delai de payement :</strong> 
           <span>{user.delai}</span>
           <br />
           <br />
           <Link to="/SuiveLesDemandes">
           <div className="btn btn-edit">
               Retourner
           </div>
           </Link>
        </div>
        </div>

    </div>
    </>
  )
}

export default Vieww