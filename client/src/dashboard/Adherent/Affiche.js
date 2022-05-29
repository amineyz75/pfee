import React ,{useState,useEffect} from 'react'
import {useParams,Link} from "react-router-dom"
import axios from 'axios'
import "./Affiche.css";
import Normal from './Normal';

function Affiche() {

    const[user,setUser]=useState({})
    const { id } = useParams();
    useEffect(async () => {
        await axios
          .get(`http://localhost:3001/AfficheUneSeuleDemande/${id}`)
          .then((resp)=>setUser({ ...resp.data[0]}))
            
      }, [id]);
      console.log(user.ident)
    
  return (
      <>
      <Normal/>
    <div style={{marginTop:"80px" , marginLeft:"220px"}}>
        <div className='card'>
        <div className="card-header">
            <p>Les donnees votre demande d'autorisation : </p>
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
           <strong>Identité:</strong> 
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
           <strong>Encours demandé:</strong> 
           <span>{user.encours}</span>
           <br />
           <br />
           <strong>Encours accepté :</strong> 
           <span>{user.encoursAc}</span>
           <br />
           <br />
           <strong>Reponse :</strong> 
           <span>{user.remarque}</span>
           <br />
           <br />
           <Link to="/Suivie">
           <div className="btn btn-edit">
               Go Back
           </div>
           </Link>
        </div>
        </div>

    </div>
    </>
  )
}

export default Affiche