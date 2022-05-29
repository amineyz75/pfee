import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import "./Update.css";

import { toast } from "react-toastify";
import Normal from "./Normal";
// import "./Details.css";




function UpdateUser() {
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/ModifierMaDemande/${id}`, {
        adherent:adherent,
        ident:ident,
        rib:rib,
        ca:ca,
        encours:encours
      })
      .then(() => {
       setAdherent("");
       setIdent("");
       setRib("");
       setCa("");
       setEncours("")
      })
      .catch((err) => toast.error(err.response.data));
    toast.success("conctact update succefully");
    setTimeout(()=>history.push("/"),500)
  };

  const history = useNavigate();
   const { id } = useParams();
  useEffect(async () => {
    await axios
      .get(`http://localhost:3001/AffMaDemande/${id}`)
      .then(res=>{
        console.log(res.data[0])
        const datausuario=res.data[0]
        setAdherent(datausuario.adherent)
        setIdent(datausuario.ident)
        setRib(datausuario.rib)
        setCa(datausuario.ca)
        setEncours(datausuario.encours)
      })



  }, []);


  const [adherent,setAdherent]=useState("");
  const [ident,setIdent]=useState("");
  const [rib,setRib]=useState("");
  const [ca,setCa]=useState("");
  const [encours,setEncours]=useState("");


  return (
    <>
    <Normal/>
    <div style={{ marginTop: "100px" }}>
      <form onSubmit={handleSubmit}
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <h3><center>Modifier les donnees de votre demande d'autorisation :</center></h3>

        <label htmlFor="adherent">adherent</label>
        <input
          type="text" value={adherent} 
          onChange={(e)=>{setAdherent (e.target.value)}} required  />
         
         
          
        

        <label htmlFor="ident">ident</label>
        <input type="text"   value={ident} 
          onChange={(e)=>{setIdent (e.target.value)}} required/>
        <label>rib</label>
        <input type="text"  value={rib} 
          onChange={(e)=>{setRib (e.target.value)}} required></input>
        <label>ca</label>
        <input type="text" value={ca} 
          onChange={(e)=>{setCa (e.target.value)}} required ></input>
          <label>Encours demandé :</label>
        <input type="text" value={encours} 
          onChange={(e)=>{setEncours (e.target.value)}} required></input>
        <input type="submit"  value="save"  />
        <Link to={"/Suivie"}>
            <button className="btn btn-edit">go back</button>
            </Link>
      </form>
    </div>
    </>
  );
}

export default UpdateUser;
