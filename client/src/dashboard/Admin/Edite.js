import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import Admine from "./Admine";
// import "./Details.css";

function Edite() {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/modifierUtilisateur/${id}`, {
        name:name,
        email:email,
        role:role,
        telephone:telephone,
        societe:societe
      })
      .then(() => {
       setName("");
       setEmail("");
       setRole("");
       setTelephone("");
       setSociete("");
      })
      .catch((err) => toast.error(err.response.data));
    toast.success("conctact update succefully");
    setTimeout(()=>history.push("/"),500)
  };

  const history = useNavigate();
   const { id } = useParams();
  useEffect(async () => {
    await axios
      .get(`http://localhost:3001/afficher/UNutilisateur/${id}`)
      .then(res=>{
        console.log(res.data[0])
        const datausuario=res.data[0]
        setName(datausuario.name)
        setEmail(datausuario.email)
        setTelephone(datausuario.telephone)
        setRole(datausuario.role)
        setSociete(datausuario.societe)

      })



  }, []);


  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [role,setRole]=useState("");
  const [telephone,setTelephone]=useState("");
  const [societe,setSociete]=useState("");

  return (
    <>
    <form
      >
    <Admine/>
    <div style={{ marginTop: "100px" ,  margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",}}>
      
        <h1>{id}</h1>
        <label htmlFor="adherent">Nom</label>
        <input
          type="text" value={name} 
          onChange={(e)=>{setName (e.target.value)}}   />  
        <label htmlFor="ident">Email :</label>
        <input type="text"   value={email} 
          onChange={(e)=>{setEmail (e.target.value)}}/>
          <label htmlFor="ident">Role :</label>
        <input type="text"   value={role} 
          onChange={(e)=>{setRole (e.target.value)}}/>
          <label htmlFor="ident">Telephone :</label>
        <input type="text"   value={telephone} 
          onChange={(e)=>{setTelephone (e.target.value)}}/>
          <label htmlFor="ident">Societe :</label>
        <input type="text"   value={societe} 
          onChange={(e)=>{setSociete (e.target.value)}} required/>


<Link to={"/GererUtilisateur"}>
        <input type="submit"  value="save"  onClick={handleSubmit} />
        </Link>
        <Link to={"/GererUtilisateur"}>
            <button className="btn btn-edit">retourner</button>
            </Link>
    
    </div>
    </form>
    </>
  );
}
export default Edite;
