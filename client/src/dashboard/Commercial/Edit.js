// import axios from "axios";
// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useParams, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import Commercial from "./Commercial";
// import "./Edit.css";

// function Edit() {
//   //rejeter la demande
//   const rejeter = (id) => {
//     if (window.confirm("êtes-vous sûr de rejeter cette demande ?")) {
//       console.log(id);
//       axios.put(`http://localhost:3001/rejetercommercial/${id}`);
//       // toast.success("deamnde rejeter avec succés !");
//       // setTimeout(()=>loadData(),500)
//     }
//   };
//   //valider la demande
//   const valider = (id) => {
//     if (window.confirm("êtes-vous sûr d'accepter cette demande ?")) {
//       console.log(id);
//       axios
//         .put(`http://localhost:3001/validercommercial/${id}`, {
//           adherent: adherent,
//           ident: ident,
//           rib: rib,
//           ca: ca,
//           encours: encours,
//           delai: delai,
//         })
//         .then(() => {
//           setAdherent("");
//           setIdent("");
//           setRib("");
//           setCa("");
//           setEncours("");
//           setDelai("");
//         })
//         .catch((err) => toast.error(err.response.data));
//       toast.success("conctact update succefully");
//       setTimeout(() => history.push("/"), 500);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .put(`http://localhost:3001/update/${id}`, {
//         adherent: adherent,
//         ident: ident,
//         rib: rib,
//         ca: ca,
//       })
//       .then(() => {
//         setAdherent("");
//         setIdent("");
//         setRib("");
//         setCa("");
//       })
//       .catch((err) => toast.error(err.response.data));
//     toast.success("conctact update succefully");
//     setTimeout(() => history.push("/"), 500);
//   };

//   const history = useNavigate();
//   const { id } = useParams();
//   useEffect(async () => {
//     await axios.get(`http://localhost:3001/demandee/${id}`).then((res) => {
//       console.log(res.data[0]);
//       const datausuario = res.data[0];
//       setAdherent(datausuario.adherent);
//       setIdent(datausuario.ident);
//       setRib(datausuario.rib);
//       setCa(datausuario.ca);
//       setEncours(datausuario.encours);
//       setDelai(datausuario.delai);
//     });
//   }, []);

//   const [adherent, setAdherent] = useState("");
//   const [ident, setIdent] = useState("");
//   const [rib, setRib] = useState("");
//   const [ca, setCa] = useState("");
//   const [encours, setEncours] = useState("");
//   const [delai, setDelai] = useState("");

//   return (
//     <>
//     <Commercial/>
//     <div style={{ marginTop: "100px" }}>
//       <form
//         style={{
//           margin: "auto",
//           padding: "15px",
//           maxWidth: "400px",
//           alignContent: "center",
//         }}
//       >
//         <h1>{id}</h1>

//         <label htmlFor="adherent">adherent</label>
//         <input
//           type="text"
//           value={adherent}
//           onChange={(e) => {
//             setAdherent(e.target.value);
//           }}
//         />

//         <label htmlFor="ident">ident</label>
//         <input
//           type="text"
//           value={ident}
//           onChange={(e) => {
//             setIdent(e.target.value);
//           }}
//         />
//         <label>rib</label>
//         <input
//           type="text"
//           value={rib}
//           onChange={(e) => {
//             setRib(e.target.value);
//           }}
//         ></input>
//         <label>ca</label>
//         <input
//           type="text"
//           value={ca}
//           onChange={(e) => {
//             setCa(e.target.value);
//           }}
//         ></input>
//         <label>Encours :</label>
//         <input
//           type="text"
//           value={encours}
//           onChange={(e) => {
//             setEncours(e.target.value);
//           }}
//         ></input>
//         <label>Delai </label>
//         <input
//           type="text"
//           value={delai}
//           onChange={(e) => {
//             setDelai(e.target.value);
//           }}
//         ></input>

//         <label>
//           Renseignement bacncaire :
//           <select>
//             <option value="grapefruit">Pamplemousse</option>
//             <option value="lime">Citron vert</option>
//             <option value="coconut">Noix de coco</option>
//             <option value="mango">Mangue</option>
//           </select>
//         </label>
//         <label>Montant finale</label>
//         <input
//           type="text"
//           value={ca}
//           onChange={(e) => {
//             setCa(e.target.value);
//           }}
//         ></input>
//         <center>
//         <button
//           type="button"
//           class="btn btn-success"
//           onClick={() => valider(id)}
//         >
//           Valider
//         </button>
//         <button
//           type="button"
//           class="btn btn-danger"
//           onClick={() => rejeter(id)}
//         >
//           Rejeter
//         </button>
//         <Link to={"/Main"}>
//           <button className="btn btn-edit">go back</button>
//         </Link>
//         </center>
        
//       </form>
//     </div>
//     </>
//   );
// }

// export default Edit;
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Commercial from "./Commercial";
import "./Edit.css";
import Sidebar from "./Sidebar";


function Edit() {
  //rejeter la demande
  const rejeter = (id) => {
    if (window.confirm("êtes-vous sûr de rejeter cette demande ?")) {
      console.log(id);
      axios.put(`http://localhost:3001/rejetercommercial/${id}`);
      // toast.success("deamnde rejeter avec succés !");
      // setTimeout(()=>loadData(),500)
    }
  };
  //valider la demande
  const valider = (id) => {
    
    if (window.confirm("êtes-vous sûr d'accepter cette demande ?")) {
      console.log(id);
      axios
        .put(`http://localhost:3001/validercommercial/${id}`, {
          adherent: adherent,
          ident: ident,
          rib: rib,
          ca: ca,
          encours: encours,
          delai: delai,
          re,re,
          enc,enc
        })
        .then(() => {
          setAdherent("");
          setIdent("");
          setRib("");
          setCa("");
          setEncours("");
          setDelai("");
          setRe("");
          setEnc("")
        })
        .catch((err) => toast.error(err.response.data));
      toast.success("conctact update succefully");
      setTimeout(() => history.push("/"), 500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/update/${id}`, {
        adherent: adherent,
        ident: ident,
        rib: rib,
        ca: ca,
        re,re,
        enc,enc
      })
      .then(() => {
        setAdherent("");
        setIdent("");
        setRib("");
        setCa("");
      })
      .catch((err) => toast.error(err.response.data));
    toast.success("conctact update succefully");
    setTimeout(() => history.push("/"), 500);
  };

  const history = useNavigate();
  const { id } = useParams();
  useEffect(async () => {
    await axios.get(`http://localhost:3001/AfficheUneSeuleDemande/${id}`).then((res) => {
      console.log(res.data[0]);
      const datausuario = res.data[0];
      setAdherent(datausuario.adherent);
      setIdent(datausuario.ident);
      setRib(datausuario.rib);
      setCa(datausuario.ca);
      setEncours(datausuario.encours);
      setDelai(datausuario.delai);
    });
  }, []);

  const [adherent, setAdherent] = useState("");
  const [ident, setIdent] = useState("");
  const [rib, setRib] = useState("");
  const [ca, setCa] = useState("");
  const [encours, setEncours] = useState("");
  const [delai, setDelai] = useState("");
  const [re, setRe] = useState("");
  const [enc, setEnc] = useState("");


  const [remarque, setRemarque] = useState("");

  return (
    <>
    <Commercial/>
    <div style={{ marginTop: "20px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <h1>{id}</h1>

        <label htmlFor="adherent">Adhèrent :</label>
        <input
          type="text"
          value={adherent}
          onChange={(e) => {
            setAdherent(e.target.value);
          }}
        />

        <label htmlFor="ident">Identite :</label>
        <input
          type="text"
          value={ident}
          onChange={(e) => {
            setIdent(e.target.value);
          }}
        />
        <label>RIB :</label>
        <input
          type="text"
          value={rib}
          onChange={(e) => {
            setRib(e.target.value);
          }}
        ></input>
        <label>ca</label>
        <input
          type="text"
          value={ca}
          onChange={(e) => {
            setCa(e.target.value);
          }}
        ></input>
        <label>Encours demandé :</label>
        <input
          type="text"
          value={encours}
          onChange={(e) => {
            setEncours(e.target.value);
          }}
        ></input>
        <label>Encours accepté :</label>
        <input
          type="text"
          value={enc}
          onChange={(e) => {
            setEnc(e.target.value);
          }}
        ></input>
        <label>Delai : </label>
        <input
          type="text"
          value={delai}
          onChange={(e) => {
            setDelai(e.target.value);
          }}
        ></input>
        <label>Renseignement Bancaire :</label>
        <input
          type="text"
          value={re}
          onChange={(e) => {
            setRe(e.target.value);
          }}
        ></input>
     
        <label>Montant finale</label>
        <input
          type="text"
          value={ca}
          onChange={(e) => {
            setCa(e.target.value);
          }}
        ></input>
        <center>
          <button
            type="button"
            class="btn btn-success"
            onClick={() => valider(id)}
            
          >
            Valider
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => rejeter(id)}
          >
            Rejeter
          </button>
          <Link to={"/SuiveLesDemandes"}>
            <button className="btn btn-edit">retourner</button>
          </Link>
        </center>
      </form>
    </div>
    </>
  );
}

export default Edit;

