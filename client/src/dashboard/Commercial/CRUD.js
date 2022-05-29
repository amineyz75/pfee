import axios from "axios";
import { Axios } from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Commercial from "./Commercial";

export default function CRUD() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    await axios.get("http://localhost:3001/AfficheTousLesDemandes").then((res) => {
      setData(res.data);
    });
  });

  const nav = useNavigate();

  const logout = () => {
    // e.preventDefault()
    localStorage.clear();
    nav("/login");
  };
  //rejeter la demande par la direction comemercial  : 
  // const rejeter = (id) => {
  //   if (window.confirm("êtes-vous sûr de rejeter cette demande ?")) {
  //     console.log(id);
  //     axios.put(`http://localhost:3001/rejetercommercial/${id}`);
  //     toast.success("deamnde rejeter avec succés !");
  //     // setTimeout(()=>loadData(),500)
  //   }
  // };
  //valider demande par la direction comemrcial :
  // const valider = (id) => {
  //   if (window.confirm("êtes-vous sûr d'accepter cette demande ?")) {
  //     console.log(id);
  //     axios.put(`http://localhost:3001/validercommercial/${id}`);
  //     toast.success("deamnde accepté avec succés !");
  //     // setTimeout(()=>loadData(),500)
  //   }
  // };
  const deleteContact = (id) => {
    if (window.confirm("êtes-vous sûr de supprimer cette demande ?")) {
      console.log(id);
      axios.delete(`http://localhost:3001/delete/demande/${id}`);
      toast.success("contact deleted successfully");
      // setTimeout(()=>loadData(),500)
    }
  };

  return (
    <>
    <Commercial/>
        <div style={{ marginTop: "20px",marginLeft:"290px" }}>
      <center><h1>Liste des demandes d'autorisation :</h1></center>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Num</th>
            <th style={{ textAlign: "center" }}>adherent</th>
            <th style={{ textAlign: "center" }}>Identité</th>
            <th style={{ textAlign: "center" }}>Rib</th>
            <th style={{ textAlign: "center" }}>Ca</th>
            <th style={{ textAlign: "center" }}>Mode </th>
            <th style={{ textAlign: "center" }}>Encours</th>
            <th style={{ textAlign: "center" }}>Delai</th>

            {/* <th style={{ textAlign: "center" }}>remarque</th> */}

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
                <td>{item.mode}</td>
                <td>{item.encours}</td>
                <td>{item.delai}</td>

                {/* <td>
                  <button type="button" class="btn btn-success"
                   onClick={() => valider(item.id)}
                  >
                    Valider
                  </button>
                  <button type="button" class="btn btn-danger"
                   onClick={() => rejeter(item.id)}
                  >
                    Rejeter
                  </button>
                </td> */}
                
                <td>
                  <center>
                  <Link to={`/modifier/${item.id}`}>
                    <button className="btn btn-edit">Consulter</button>
                  </Link>
                  </center>
                  
                  <button
                    className="btn btn-delete"
                    onClick={() => deleteContact(item.id)}
                  >
                    Supprimer
                  </button>
                  <center> <Link to={`/Vieww/${item.id}`}>
                    <button className="btn btn-view">Afficher</button>
                  </Link></center>
                 
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
