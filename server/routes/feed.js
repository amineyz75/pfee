const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const exphbs=require('express-handlebars')
const nodemailer=require('nodemailer')
const saltRounds = 10;
//Viewer engin setup
// app.engine('handlebars',exphbs());
// app.set('view engine','handlebars')
// //bodyparser midlewars
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json())






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

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "usuarios",
});






// app.post("/register", function (req, res) {
//     const { name, password, email, telephone, societe,nom,prenom } = req.body;
//     bcrypt.hash(password, saltRounds, function (err, hash) {
//       if (err) {
//         console.log(err);
//       }
//       console.log(name);
  
//       db.query(
//         `INSERT INTO user (name, password, email , telephone , societe , nom , prenom) VALUES ('${name}','${hash}','${email}','${telephone}','${societe}','${nom}','${prenom}')`,
//         function (error, results) {
//           if (error) throw error;
//           res.send(results);
//         }
//       );
//     });
//   });






















app.listen(3001, () => {
    console.log("running server");
  });
  