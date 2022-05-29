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




function UpdateFeed() {
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/updateFeed/Adherent/${id}`, {
        question:question,
        email:email,
        societe:societe,
        name:name,
        reponse:reponse
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
      .get(`http://localhost:3001/Afficheone/feedbackk/${id}`)
      .then(res=>{
        console.log(res.data[0])
        const datausuario=res.data[0]
        setQuestion(datausuario.question)
        setEmail(datausuario.email)
        setSociete(datausuario.societe)
        setName(datausuario.name)
        setReponse(datausuario.response)
      })



  }, []);


  const [question,setQuestion]=useState("");
  const [email,setEmail]=useState("");
  const [societe,setSociete]=useState("");
  const [name,setName]=useState("");
  const [reponse,setReponse]=useState("");


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

        <label htmlFor="adherent">Votre question :</label>
        <input
          type="text" value={question} 
          onChange={(e)=>{setQuestion (e.target.value)}} required  />
         
         
         <label htmlFor="ident">Email</label>
        <input type="text"   value={email} 
          onChange={(e)=>{setEmail (e.target.value)}} disabled/>


            <label htmlFor="ident">Societe</label>
          <input type="text"   value={societe} 
            onChange={(e)=>{setSociete (e.target.value)}} disabled/>

{/*       
        <label>Name</label>
        <input type="text"  value={name} 
          onChange={(e)=>{setName (e.target.value)}} disabled ></input> */}


        <label>Reponse</label>
        <input type="text" value={reponse} 
          onChange={(e)=>{setReponse (e.target.value)}} disabled></input>
        <input type="submit" value="save"  />
        <Link to={"/BoiteReception"}>
            <button className="btn btn-edit">go back</button>
            </Link>
      </form>
    </div>
    </>
  );
}

export default UpdateFeed;
