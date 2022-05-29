import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router";
import { FiUser } from "react-icons/fi";
import Admine from "./Admine";
import "./Admine.css"
function AddAdmin() {
    const nav = useNavigate();
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [nomReg, setNomReg] = useState("");
    const [prenomReg, setPrenomReg] = useState("");
    const [societeReg, setSocieteReg] = useState("");



    const [emailReg, setEmailReg] = useState("");
    const [telephoneReg, settelephoneReg] = useState("");
    const [values, setValues] = useState("");
    const [errors, setErrors] = useState("");
  
    Axios.defaults.withCredentials = true;
    const AddAdmin = (event) => {
        event.preventDefault();
        Axios.post("http://localhost:3001/AddAdmin", {
          name: usernameReg,
          nom:nomReg,
          password: passwordReg,
          email: emailReg,
          telephone: telephoneReg,
         
          prenom:prenomReg
        })
          .then((res) => {
            if (res) {
              nav("/login");
            }
            // setUsernameReg("");
            // setPasswordReg("");
            // setEmailReg("");
            // settelephoneReg("");
            // setSocieteReg("");
          })
          .catch((err) => {
            console.log(err);
          });
      };
  return (
    <>
    <Admine/>
    <div style={{ marginTop: "10px" }}>
        <form 
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "600px",
            alignContent: "center",
          }}>
          <center><h3>Formulaire d'ajout admin</h3></center>
          {/* <label htmlFor="adherent">Adherent :</label> */}
          <input
            type="text" value={usernameReg}
            onChange={(e) => setUsernameReg(e.target.value)} placeholder="Nom d'utilisateur" required />  
          <input
            type="text" value={nomReg}
            onChange={(e) => setNomReg(e.target.value)} placeholder="Nom " required />  
           <input
            type="text" value={prenomReg}
            onChange={(e) => setPrenomReg(e.target.value)} placeholder="Prenom" required />  

                <input type="text" value={telephoneReg}
                onChange={(e) => settelephoneReg(e.target.value)}  placeholder="N° de téléphone  : " 
                required
                // pattern="[0-9]{8}"
                />
            
            <input
            type="text" value={emailReg}
            onChange={(e) => setEmailReg(e.target.value)} placeholder="Adresse email" required />  
       
       <input
            type="text" value={societeReg}
            onChange={(e) => setSocieteReg(e.target.value)} placeholder="Societe" required />  
         
         <input
            type="text" value={passwordReg}
            onChange={(e) => setPasswordReg(e.target.value)} placeholder="Mot de passe" required /> 
      

                         




          <input type="submit" onClick={AddAdmin} value="Envoyer"  />
          
        </form>
      </div>
    
                   
    </>
  )
}

export default AddAdmin