
import axios from "axios";
import { Axios } from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Normal from "./Normal";

function Donnees() {
  const [data, setData] = useState([]);
  const userid=localStorage.getItem("userid");
  console.log(userid)
  useEffect(async () => {
    await axios.get(`http://localhost:3001/Affiche/mesDonnees/${userid}`).then((res) => {
      setData(res.data);
    });
  });
 
//   const deleteContact = (id) => {
//     if (window.confirm("are you sure to delete this user ?")) {
//       console.log(id);
//       axios.delete(`http://localhost:3001/supprimerMa/demande/${id}`);
//       toast.success("contact deleted successfully");
//       // setTimeout(()=>loadData(),500)
//     }
//   };
  return (
    <>
    <Normal/>
    <div style={{ marginTop: "80px" ,marginLeft:"250px" }}>
     

      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Num</th>

            <th style={{ textAlign: "center" }}>Nom d'utilisateur</th>
            <th style={{ textAlign: "center" }}>Nom</th>
            <th style={{ textAlign: "center" }}>Prenom</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Role</th>
            <th style={{ textAlign: "center" }}>Telephone</th>
            <th style={{ textAlign: "center" }}>Societe</th>



            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.nom}</td>
                <td>{item.prenom}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>{item.telephone}</td>
                <td>{item.societe}</td>

                <td>
                  <Link to={`/UpdateDonnes/${item.id}`}>
                    <button className="btn btn-edit">Modifier </button>
                  </Link>
                 
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    AAAA
    </>
  );
}

export default Donnees;

 {/* <button
                    className="btn btn-delete"
                    // onClick={() => deleteContact(item.id)}
                  >
                    Supprimer
                  </button> */}
                  {/* <Link to={`/Affiche/${item.id}`}>
                    <button className="btn btn-view">Afficher</button>
                  </Link> */}