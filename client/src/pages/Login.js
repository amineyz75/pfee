// import React, { useEffect, useState } from "react";
// import Axios from "axios";
// import "./Login.css";
// import { Link } from "react-router-dom";

// import { useNavigate } from "react-router";
// import Navigation from "./Navigation";
// // import { Link } from "@material-ui/core";
// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginStatus, setLoginStatus] = useState("");
//   Axios.defaults.withCredentials = true;

//   const nav = useNavigate();
//   const login = async () => {
//     const { data } = await Axios.post("http://localhost:3001/login", {
//       name: username,
//       password: password,
//     });
//     if (data.message) {
//       setLoginStatus(data.message);
//       console.log(data.message);
//       localStorage.setItem("hardikSubmissionEmail", JSON.stringify(username));
//       localStorage.setItem("hardikSubmissionPassword",JSON.stringify(password));
  
      
//     } else {
//       localStorage.setItem("userid",data.id);
//       // console.log(data.id)
//       nav("/Main");
//     }

//     setUsername("");
//     setPassword("");
//   };

//   //request if the user session  exists
//   useEffect(() => {
//     Axios.get("http://localhost:3001/login").then((res) => {
//       if (res.data.loggedIn === true) {
//         setLoginStatus(res.data.user[0].name);
//       }
//     });
//   }, []);
//   return (
//     <div className="hero">
//       <Navigation />

//       <div className="form-box">
//         <center>
//           {" "}
//           <h3 className="tite">Login</h3>
//         </center>

//         <div className="form-group">
//           <label>
//             <i class="zmdi zmdi-account"></i>
//           </label>
//           <input
//             type="text"
//             className="input-field"
//             placeholder="Username"
//             required
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="cpassword">
//             <i class="zmdi zmdi-lock"></i>
//           </label>

//           <input
//             type="password"
//             placeholder="Password"
//             className="input-field"
//             requi
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="button-box">
//           <button className="submit-btn" onClick={login}>
//             Login
//           </button>
//         </div>
//         <p className="forgot-password text-right">
//         <Link exact to="/Forgot" >
//           Forgot password?
//           </Link>     
//              </p>

//         {/* <div>
//         <p className="forgot-password text-right">
//         <Link exact to="/Forgot" >
//           Forgot password?
//           </Link>  
//         </p>
//         </div> */}
        
//         <h1>{loginStatus}</h1>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
import rr from "./../assets/register.jpg";
import { useNavigate } from "react-router";
import Navigation from "./Navigation";
// import { Link } from "@material-ui/core";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  Axios.defaults.withCredentials = true;

  const nav = useNavigate();
  const login = async () => {
    const { data } = await Axios.post("http://localhost:3001/login", {
      name: username,
      password: password,
    });
    if (data.message) {
      setLoginStatus(data.message);
      console.log("data.message")
      console.log(data.message);
      // localStorage.setItem("hardikSubmissionEmail", JSON.stringify(username));
      // localStorage.setItem(
      //   "hardikSubmissionPassword",
      //   JSON.stringify(password)
      // );
    } else {
      localStorage.setItem("userid", data.id);
      // console.log(data.id)
      nav("/Main");
    }

    setUsername("");
    setPassword("");
  };

  //request if the user session  exists
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((res) => {
      if (res.data.loggedIn === true) {
        setLoginStatus(res.data.user[0].name);
      }
    });
  }, []);
  return (
   
    <div className="App">
      <section>
        <div className="register">
            <div className="col-1">
                <h2>Connectez-vous</h2>
                <span>Connectez-vous et profitez du service</span>

              
                  
                    <input type="text" className="input-fieldd" placeholder="Nom d'utilisateur"   value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required />
                   
                    <input type="password"  className="input-fieldd" placeholder='Mot de passe' 
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required
                      />
                  
                    <div className="button-box">
                      
                        
                        <button  onClick={login} className="submit-btn"> Se connecter </button>
                          {/* <td> <button  className="cancel-btn"> Annuler </button></td> */}
                        
                    
                          <Link to="/reset-password">
                                           Mot de passe oublié
                                      </Link>
                 

                  
                </div>
                    
          

            </div>
            <div className="col-2">
                <img src={rr} alt="" />
              
            </div>
        </div>
    </section>
    </div>
  );
}

