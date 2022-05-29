const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const exphbs=require('express-handlebars')
const nodemailer=require('nodemailer');
const { Router } = require("express");
const saltRounds = 10;
const crypto = require('crypto')





const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST","DELETE","PUT","PATCH"],
    credentials: true,
  })
); // enable cors
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "userID",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);
//connexion base de donnée
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "usuarios",
});
//ADHERENT --------------------------------------------------------------------------------------------------------------------------
//1--Gerer les demandes (ADHERENT)

//Ajouter une demande (ADHERENT)
app.post("/registerr/:id", (req, res) => {
  const id=req.params.id;
  const {
    adherent,
adresse,nom,activite,tele,ident,resp,cin,personne,rib,ca,mode,delai,encours,
  } = req.body;
  db.query(
    `INSERT INTO demande (adherent,adresse,activite,tele,ident,resp,cin,personne,rib,ca,mode,delai,encours,iduser) VALUES('${adherent}',
    '${adresse}','${activite}','${tele}','${ident}','${resp}','${cin}','${personne}','${rib}','${ca}','${mode}','${delai}','${encours}','${id}')`
   ,
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );

   
});
//Afficher la liste des demandes éffectués (ADHERENT)
app.get("/AffMesDemandes/:id", (req, res) => {
  const id = req.params.id;

  db.query(`SELECT * FROM demande where iduser=${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//Supprimer ma demande(ADHERENT)
app.delete("/supprimerMa/demande/:id", (req, res) => {
  const id = req.params.id;
  console.log(id)
  db.query(`DELETE FROM demande WHERE id = ${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//Modifier Demande (ADHERENT)
app.put("/ModifierMaDemande/:id", (req, res) => {
  const id = req.params.id;
    const body = req.body;
  console.log(id)
  const queryString =`UPDATE demande SET  adherent =? , ident = ? , rib =? ,ca= ? ,encours=? WHERE id =?`

  db.query(queryString,[body.adherent,body.ident,body.rib,body.ca,body.encours,id],(err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      message: 'modification avec succées !!',
    });
    }
  );
});
//Affihcer une seule Demande(ADHERENT )
app.get("/AffMaDemande/:id", (req, res) => {
  const id = req.params.id;

  db.query(`SELECT * FROM demande where id=${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//2 **gerer les feedback par (ADHERENT) **

//ajouter une feedbakc (ADHERENT)
app.post("/Feedback/:id", (req, res) => {
  const {Question} = req.body;
  const id = req.params.id;

  const ee =db.query(`SELECT name,email,societe
  FROM user
  WHERE id = '${id}'`,
  function (error, results) {
    if (error) throw error;
    Object.keys(results).forEach(function (key) {
      var row = results[key];
       const email=row.email;
       const societe=row.societe;
       const name=row.name;


       db.query(
        `INSERT INTO feedback (question,iduser, email,societe ,name ) VALUES
         ('${Question}','${id}','${email}','${societe}','${name}')`,
        function (error, results) {
          if (error) throw error;
          res.send(results);
        }
      );
    })});
   

  })

//consulter tous les feedbacks  (ADHERENT)
app.get("/select/feedbackk/:id", (req, res) => {
  const id = req.params.id;

  db.query(`SELECT * FROM feedback where iduser=${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//consulter une seule feedback (Adherent)
app.get("/Afficheone/feedbackk/:id", (req, res) => {
  // const {id} = req.params.id;

  db.query(`SELECT question , email , response ,societe FROM feedback where id=${req.params.id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//modifier le feedback (Adherent)
app.put("/updateFeed/Adherent/:id", (req, res) => {
  const id = req.params.id;
    const body = req.body;
  console.log(id)
  const queryString =`UPDATE feedback SET  question =?  WHERE id =?`

  db.query(queryString,[body.question,id],(err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      message: 'modification avec succées !!',
    });
    }
  );
});

//supprimer une feedback (Adherent)
app.delete("/supprimer/feedback/:id", (req, res) => {
  const id = req.params.id;
  console.log(id)
  db.query(`DELETE FROM feedback WHERE id = ${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//2 **gerer mes données (ADHERENT) **
app.get("/Affiche/mesDonnees/:id", (req, res) => {
  // const {id} = req.params.id;

  db.query(`SELECT * FROM user where id=${req.params.id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});



//ADMIN-------------------------------------------------------------------------------------------------------------------------------




//**1-gerer les feedback (ADMIN) :

 //Consulter tous les FeedBacks (ADMIN):
 app.get("/AfficheTousFeedback", (req, res) => {
  db.query("SELECT * FROM feedback", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//repondre aux questions (ADMIN)
app.put("/Reponse/feedback/:id", (req, res) => {
  const id = req.params.id;
  const response=req.body.response;
  console.log(response)

  const queryString =`UPDATE feedback SET  response = ?  WHERE id =?`

  db.query(queryString,[response,id],(err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      message: 'modification avec succées !!',
    });
    }
  );
});

//Supprimer une feedback (ADMIN) 
app.delete("/delete/feedback/:id", (req, res) => {
  const id = req.params.id;
  console.log(id)
  db.query(`DELETE FROM feedback WHERE id = ${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// afficher une seule feedbakc (ADMIN)
app.get("/AfficheUneFeedback/:id", (req, res) => {
  const id = req.params.id;
  console.log(id)
  db.query(`SELECT * FROM feedback WHERE id = ${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//**2-gerer les utilisateurs (ADMIN) :

//Ajouter un nouveau admin :
 app.post("/AddAdmin", function (req, res) {
  const { name, password, email, telephone, societe ,nom,prenom} = req.body;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      console.log(err);
    }
    console.log(email);
const role="admin";
    db.query(
      `INSERT INTO user (name, password, email , telephone , societe, role,nom,prenom) VALUES ('${name}','${hash}','${email}',
      '${telephone}','${societe}','${role}','${nom}','${prenom}')`,
      function (err, results) {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          message: 'modification avec succées !!',
        });
      }
    );
  });
});

//Affiche la liste de tous les utilisateurs(ADMIN)
app.get("/select/users", (req, res) => {
  db.query("SELECT * FROM user", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//modifier un utilisateur (ADMIN)
app.put("/modifierUtilisateur/:id", (req, res) => {
  const id = req.params.id;
    const body = req.body;
  console.log(id)
  const queryString =`UPDATE user SET  name =? , role = ? , email =? ,telephone= ?,societe= ? WHERE id =?`

  db.query(queryString,[body.name,body.role,body.email,body.telephone,body.societe,id],(err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      message: 'modification avec succées !!',
    });
    }
  );
});

//supprimer un utilisateur(ADMIN)
app.delete("/delete/user/:id",
 (req, res) => {
  const id = req.params.id;
  console.log(id)
  db.query(`DELETE FROM user WHERE id = ${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//Afficher un seul utilisateur
app.get("/afficher/UNutilisateur/:id", (req, res) => {
  const id = req.params.id;
  console.log(id)
  db.query(`SELECT * from user WHERE id = ${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//COMMERCIAL ------------------------------------------------------------------------------------------------------------------------



//Affiches la liste des demandes (COMMERCIAL)
app.get("/AfficheTousLesDemandes", (req, res) => {
  db.query("SELECT adherent,ident,rib,ca,encours,mode,delai,id FROM demande", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
 
//Refuser une demande (COMMERCIAL)
app.put("/rejetercommercial/:id", (req, res) => {
  const id = req.params.id;
  console.log(id)
  const queryString =`UPDATE demande SET  remarque ="demande rejeter"  WHERE id =?`

  db.query(queryString,[id],(err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      message: 'modification avec succées !!',
    });
    }
  );
});

//Accepter une demande (COMMERCIAL)
app.put("/validercommercial/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  console.log(id)
  const queryString =`UPDATE demande SET  remarque ="demande accepté" ,delai=? , encours=?,re=?,encoursAc=? WHERE id =?`

  db.query(queryString,[body.delai,body.encours,body.re,body.enc,id],(err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      message: 'modification avec succées !!',
    });
    }
  );
});

// Affiche une seule demande d'un seul utilisateur(COMMERCIAL)
app.get("/AfficheUneSeuleDemande/:id", (req, res) => {
  const id = req.params.id;
//
  db.query(`SELECT adherent,ident,nom,delai,rib,ca,encours,encoursAc,mode,remarque  FROM demande where id=${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//Supprimer une demande (COMMERCIAL)
app.delete("/delete/demande/:id", (req, res) => {
  const id = req.params.id;
  console.log(id)
  db.query(`DELETE FROM demande WHERE id = ${id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


//----------------------------------------------------------------------------------------------------------------------------------------




//s'inscrire

app.post("/register", function (req, res) {
  const { name, password, email, telephone, societe,nom,prenom } = req.body;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      console.log(err);
    }
    console.log(name);

    db.query(
      `INSERT INTO user (name, password, email , telephone , societe , nom , prenom) VALUES ('${name}','${hash}','${email}','${telephone}','${societe}','${nom}','${prenom}')`,
      function (error, results) {
        if (error) throw error;
        res.send(results);
      }
    );
  });
});
//se connecter
app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user, });
  } else {
    res.send({ loggedIn: false });
  }
});
app.post("/login", function (req, res) {
  const { name, password } = req.body;
  db.query(
    `SELECT * FROM user WHERE name = '${name}'`,
    function (error, results) {
      if (error) throw error;
      Object.keys(results).forEach(function (key) {
        var row = results[key];
        // console.log(row.id)
      });
      if (results.length > 0) {
        bcrypt.compare(password, results[0].password, function (err, result) {
          if (result) {
            req.session.user = results;
            res.status(200).send({results:results,id:results[0].id});
          } else {
            res.send({ message: "error, user or password incorrect" });
          }
        });
      } else {
        res.send({ message: "user does not exist" });
      }
    }
  );
});

//mot de passe oublié

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'facter.projet@gmail.com',
		pass: 'shcfooryykzgwlgr'
	},
	tls: {
		rejectUnauthorized: false
	}
})
// envoyer un lien sur l'email

app.post('/api/reset-password', (req, res) => {
	crypto.randomBytes(32, (err, buffer) => {
		if (err) {
			console.log(err)
		}
		const token = buffer.toString("hex")
		//hedhi select ?
    //ey
    const body = req.body;
    db.query("SELECT * FROM user WHERE email = ?",[body.email],  
    
    function (error, results) {
      if (error) throw error;
      Object.keys(results).forEach(function (key) {
        var row = results[key];
        // console.log(row.id)
      });
      if (results.length > 0) {
       
       
          					var mailOptions = {
          						from: 'Facter <facter.projet@gmail.com>',
          						to: req.body.email,
          						subject: 'password reset',
          						html: `
          					<p>You requested for password reset</p>
          					<h5>click in this <a href=http://localhost:3000/reset-password/${token}">link</a> to reset password</h5>
          					`
          					}
          					transporter.sendMail(mailOptions, function (error, info) {
          						if (error) {
          							console.log(error)
          						}
          						else {
          							console.log("E-mail de réinitialisation du mot de passe envoyé")
          						}
          					})
          					res.json({ message: "check your email" })
          				
      } else {
        res.send({ message: "user does not exist" });
      }
    }
      
   
    );})})
    
app.post('/api/new-password',(req,res)=>{
  const password = req.body.password
  const body = req.body;
  db.query("SELECT * FROM user WHERE email = ?",[body.email],  
    
  function (error, results) {
    if (error) throw error;
    Object.keys(results).forEach(function (key) {
      var row = results[key];
    });
    if (results.length > 0) {
     
      
      bcrypt.hash(password, saltRounds, function (err, hash) {
      const queryString =`UPDATE user SET password = ? WHERE email =?`
     

db.query(queryString,[hash,body.email],(err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  return res.json({
    success: 1,
    message: 'modification avec succées !!',
  });
  }
)});
    
                
    } 
    
})
})
 



app.listen(3001, () => {
  console.log("running server");
});

