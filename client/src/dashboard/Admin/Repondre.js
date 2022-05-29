import React ,{useState,useEffect} from 'react'
import {useParams,Link} from "react-router-dom"
import { toast } from "react-toastify";

import axios from 'axios'
import Admine from './Admine';
function Repondre() {
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .put(`http://localhost:3001/Reponse/feedback/${id}`, {
            response:response
            
          })
          .then(() => {
           setResponse("");
          
          })
          .catch((err) => toast.error(err.response.data));
        // toast.success("conctact update succefully");
        // setTimeout(()=>history.push("/"),500)
      };
    const[response,setResponse]=useState("")
    const[user,setUser]=useState({})
    const{id}=useParams();
    useEffect(async () => {
        await axios
          .get(`http://localhost:3001/AfficheUneFeedback/${id}`)
          .then((resp)=>setUser({ ...resp.data[0]}))
            
      }, [id]);
      console.log(id)
    console.log(user.name)
  return (
    <>
    <Admine/>
    <form onSubmit={handleSubmit}>
    <div style={{marginTop:"20px"}}>
        <div className='card'>
        <div className="card-header">
            <p>Repondre aux feedbacks :</p>
        </div>
        <div className='container'>
           <strong>ID :</strong> 
           <span>{user.id}</span>
           <br />
           <br />
           <strong>Nom:</strong> 
           <span>{user.name}</span>
           <br />
           <br />
           <strong>Email:</strong> 
           <span>{user.email}</span>
           <br />
           <br />
           <strong>Question:</strong> 
           <span>{user.question}</span>
           <br />
           <br />
           <strong>Reponse :</strong> 
           <input type="text" value={response} 
          onChange={(e)=>{setResponse (e.target.value)}}
          required
          >
            
          </input>
          
           <br />
           <br />
           <input type="submit"  value="save"  />

           <Link to="/SuivieFeedback">
           <div className="btn btn-edit">
              Retourner
           </div>
           </Link>
        </div>
        </div>

    </div>
    </form>
    </>
  )
}

export default Repondre
