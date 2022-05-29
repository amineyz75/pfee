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




function ModifDonnes() {
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/update/mesDonnes/${id}`, {
        name:name,
        email:email,
        telephone:telephone,
        societe:societe,
        nom:nom,
        prenom:prenom
      })
      .then(() => {
    //    setAdherent("");
    //    setIdent("");
    //    setRib("");
    //    setCa("");
      })
      .catch((err) => toast.error(err.response.data));
    toast.success("conctact update succefully");
    setTimeout(()=>history.push("/"),500)
  };

  const history = useNavigate();
   const { id } = useParams();
  useEffect(async () => {
    await axios
      .get(`http://localhost:3001/Affiche/mesDonnees/${id}`)
      .then(res=>{
        console.log(res.data[0])
        const datausuario=res.data[0]
        setName(datausuario.name)
        setEmail(datausuario.email)
        setSociete(datausuario.societe)
        setNom(datausuario.nom)
        setPrenom(datausuario.prenom)
        setRole(datausuario.role)
        setTelephone(datausuario.telephone)


      })



  }, []);


  const [nom,setNom]=useState("");
  const [prenom,setPrenom]=useState("");
  const [email,setEmail]=useState("");
  const [societe,setSociete]=useState("");
  const [name,setName]=useState("");
  const [telephone,setTelephone]=useState("");
  const [role,setRole]=useState("");




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
        <h1>{id}</h1>

        <label htmlFor="adherent">Nom d'utilisateur :</label>
        <input
          type="text" value={name} 
          onChange={(e)=>{setName (e.target.value)}} required  />

         <label htmlFor="ident">Nom</label>
        <input type="text"   value={nom} 
          onChange={(e)=>{setNom (e.target.value)}} />
         
         <label htmlFor="ident">Prenom</label>
        <input type="text"   value={prenom} 
          onChange={(e)=>{setPrenom (e.target.value)}} />

        <label htmlFor="ident">Telephone</label>
        <input type="text"   value={telephone} 
          onChange={(e)=>{setTelephone (e.target.value)}} />

         <label htmlFor="ident">Email</label>
        <input type="text"   value={email} 
          onChange={(e)=>{setEmail (e.target.value)}} />


            <label htmlFor="ident">Societe</label>
          <input type="text"   value={societe} 
            onChange={(e)=>{setSociete (e.target.value)}} />

{/*       
        <label>Name</label>
        <input type="text"  value={name} 
          onChange={(e)=>{setName (e.target.value)}} disabled ></input> */}


        <label>Role</label>
        <input type="text" value={role} 
          onChange={(e)=>{setRole (e.target.value)}} disabled></input>

        <input type="submit" value="save"  />
        <Link to={"/MesDonnees"}>
            <button className="btn btn-edit">go back</button>
            </Link>
      </form>
    </div>
    </>
  );
}

export default ModifDonnes;
