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