const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "Matfen",
  password: "Geralt2077!",
  database: "trip",
});

db.connect((error) => {
    if (error) {
        console.log("Erreur de la connection à la base de données");
    } else {
        console.log("Succès de la connexion à la base de données");
    }
})

app.listen(PORT, () => {
    console.log("Connect on port server " + PORT);
})

// LOG IN / SING UP
// GET SINGLE DATA
app.get('/connect', (req, res) => {
    let qr = `select * from trip`

    db.query(qr, (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).send({message: "Internal server error"})
        }
        if (result.length > 0) {
            res.send({
                message: "get single data success",
                data: result,
            })
        } else {
            res.send({
              message: "get single data error",
            });
        }
    })
})

// POST DATA
app.post('/connect', (req, res) => {
    let user = req.body.user;
    let adress = req.body.adress;
    let phone = req.body.phone;
    let pass = req.body.pass;
    let qr = `insert into connect (user, adress, phone, pass) values (?, ?, ?, ?)`;

    db.query(qr, [user, adress, phone, pass], (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).send({message: "Internal server error"})
        }
        if (result.affectedRows>0) {
            res.send({
                message: "inserted data success",
            })
        } else {
            res.send({
              message: "inserted data error",
            });
        }
    })
})

// SEARCH GAMES
app.get("/trip/games/title/:title", (req, res) => {
  let gameTitle = req.params.title;
  let qr = `SELECT * FROM games WHERE title = ?`;

  db.query(qr, [gameTitle], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send({ message: "Internal server error" });
    }
    if (result.length > 0) {
      res.send({
        message: "get game success",
        data: result,
      });
    } else {
      res.send({
        message: "get game error",
      });
    }
  });
});
