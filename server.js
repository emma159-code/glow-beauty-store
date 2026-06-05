const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "emma",
    database: "glow_beauty"
});

db.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("MySQL Connected");
});

app.get("/", (req, res) => {
    res.send("Glow Beauty API Running");
});

app.get("/products", (req, res) => {

    db.query(
        "SELECT * FROM products",
        (err, result) => {

            if(err){
                res.status(500).json(err);
            }else{
                res.json(result);
            }

        }
    );

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});