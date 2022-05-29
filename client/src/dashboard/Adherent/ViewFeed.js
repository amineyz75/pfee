import React ,{useState,useEffect} from 'react'
import {useParams,Link} from "react-router-dom"
import axios from 'axios'
import "./Affiche.css";
import Normal from './Normal';

function ViewFeed() {

  const[user,setUser]=useState({})
  const { id } = useParams();
  useEffect(async () => {
    await axios.get(`http://localhost:3001/Afficheone/feedbackk/${id}`).then((resp)=>setUser({ ...resp.data[0]}))
  });
    
  return (
      <>
      <Normal/>
    <div style={{marginTop:"150px"}}>
        <div className='card'>
        <div className="card-header">
            {/* <p>Les donnees de la demande d'autorisation : </p> */}
        </div>
        <div className='container'>
           <strong>Num :</strong> 
           <span>{id}</span>
           <br />
           <br />
           <strong>Question :</strong> 
           <span>{user.question}</span>
           <br />
           <br />
           <strong>Email :</strong> 
           <span>{user.email}</span>
           <br />
           <br />
           <strong>Reponse :</strong> 
           <span>{user.response}</span>
           <br />
           <br />
           <strong>Entreprise :</strong> 
           <span>{user.societe}</span>
           <br />
           <br />
           <Link to="/Suivie">
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

export default ViewFeed