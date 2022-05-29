import React ,{useState,useEffect} from 'react'
import {useParams,Link} from "react-router-dom"
import axios from 'axios'

function AdherentFeedback() {
  const[user,setUser]=useState({})
  const userid=localStorage.getItem("userid");
  console.log(userid)
  useEffect(async () => {
       
   await axios.get(`http://localhost:3001/select/feedback/${userid}`)
        .then((resp)=>setUser({ ...resp.data[0]}))
          
    }, [userid]);
    
  return (
    <div style={{marginTop:"150px"}}>
    <div className='card'>
    <div className="card-header">
        <p>consulter reponse feedback :</p>
    </div>
    <div className='container'>
       <strong>ID :</strong> 
       <span>{user.id}</span>
       <br />
       <br />
       <strong>Email:</strong> 
       <span>{user.email}</span>
       <br />
       <br />
      
       <strong>Societe:</strong> 
       <span>{user.societe}</span>
       <br />
       <br />
       <strong>Question:</strong> 
       <span>{user.question}</span>
       <br />
       <br />
       <strong>Response:</strong> 
       <span>{user.response}</span>
       <br />
       <br />
       <Link to="/SuivieFeedback">
       <div className="btn btn-edit">
           Go Back
       </div>
       </Link>
    </div>
    </div>

</div>
  )
}

export default AdherentFeedback