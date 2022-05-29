import React ,{useState,useEffect} from 'react'
import {useParams,Link} from "react-router-dom"
import axios from 'axios'
import Admine from './Admine';
// import "./Aff.css";

function Aff() {
    const[user,setUser]=useState({})
    const{id}=useParams();
    useEffect(async () => {
        await axios
          .get(`http://localhost:3001/afficher/UNutilisateur/${id}`)
          .then((resp)=>setUser({ ...resp.data[0]}))
            
      }, [id]);
      console.log(id)
    console.log(user.name)
  return (
    <>
    <Admine/>
    <div style={{marginTop:"100px" ,marginLeft:"150px"}}>
        <div className='card'>
        <div className="card-header">
            <p>Les information d'utilisateur</p>
        </div>
        <div className='container'>
           <strong>ID :</strong> 
           <span>{id}</span>
           <br />
           <br />
           <strong>Nom d'utilisateur:</strong> 
           <span>{user.name}</span>
           <br />
           <br />
           <strong>Nom :</strong> 
           <span>{user.nom}</span>
           <br />
           <br />
           <strong>Prenom :</strong> 
           <span>{user.prenom}</span>
           <br />
           <br />
           <strong>Adresse email :</strong> 
           <span>{user.email}</span>
           <br />
           <br />
           <strong>Role :</strong> 
           <span>{user.role}</span>
           <br />
           <br />
           <strong>Societe:</strong> 
           <span>{user.societe}</span>
           <br />
           <br />
           <strong>Telephone:</strong> 
           <span>{user.telephone}</span>
           <br />
           <br />
           <Link to="/GererUtilisateur">
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

export default Aff