import axios from "axios";
import { Axios } from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Normal from "./Normal";

function Suivie() {
  const [data, setData] = useState([]);
  const userid=localStorage.getItem("userid");
  useEffect(async () => {
    await axios.get(`http://localhost:3001/AffMesDemandes/${userid}`).then((res) => {
      setData(res.data);
    });
  });
 
  const deleteContact = (id) => {
    if (window.confirm("are you sure to delete this user ?")) {
      console.log(id);
      axios.delete(`http://localhost:3001/supprimerMa/demande/${id}`);
      toast.success("contact deleted successfully");
      // setTimeout(()=>loadData(),500)
    }
  };
  return (
    <>
    <Normal/>
    <div style={{ marginTop: "80px" ,marginLeft:"250px" }}>
     

      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Num</th>

            <th style={{ textAlign: "center" }}>adherent</th>
            <th style={{ textAlign: "center" }}>ident</th>
            <th style={{ textAlign: "center" }}>rib</th>
            <th style={{ textAlign: "center" }}>ca</th>
            <th style={{ textAlign: "center" }}>remarque</th>

            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.adherent}</td>
                <td>{item.ident}</td>
                <td>{item.rib}</td>
                <td>{item.ca}</td>
                <td>{item.remarque}</td>
                <td>
                  <Link to={`/Update/${item.id}`}>
                    <button className="btn btn-edit">Modifier </button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => deleteContact(item.id)}
                  >
                    Supprimer
                  </button>
                  <Link to={`/Affiche/${item.id}`}>
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
  );
}

export default Suivie;
