import React ,{useState,useEffect} from 'react'
import {useParams,Link} from "react-router-dom"
import axios from 'axios'
import "./Affiche.css";
import Normal from './Normal';
import { toast } from 'react-toastify';

function BoiteReception() {
  const [data, setData] = useState([]);
  const userid=localStorage.getItem("userid");
  useEffect(async () => {
    await axios.get(`http://localhost:3001/select/feedbackk/${userid}`).then((res) => {
      setData(res.data);
    });
  });
  const deletefeed = (id) => {
    if (window.confirm("are you sure to delete this feedback ?")) {
      console.log(id);
      axios.delete(`http://localhost:3001/supprimer/feedback/${id}`);
      toast.success("contact deleted successfully");
      // setTimeout(()=>loadData(),500)
    }
  };
  return (
    <>
    <Normal/>
    <div style={{  marginTop: "80px" ,marginLeft:"250px" }}>
     

      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Num</th>

            <th style={{ textAlign: "center" }}>question</th>
            <th style={{ textAlign: "center" }}>email</th>
            <th style={{ textAlign: "center" }}>name</th>
            <th style={{ textAlign: "center" }}>reponse </th>

            

            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.question}</td>
                <td>{item.email}</td>
                <td>{item.name}</td>
                <td>{item.response}</td>

                
                <td>
                  <Link to={`/UpdateFeed/${item.id}`}>
                    <button className="btn btn-edit">Modifier </button>
                  </Link>
                  <button
                    className="btn btn-delete"  onClick={() => deletefeed(item.id)}
                    
                  >
                    Supprimer
                  </button>
                  <Link to={`/ViewFeed/${item.id}`}>
                    <button className="btn btn-view">Afficher</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default BoiteReception


