"use strict"
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'docker-db',
    user: process.env.DB_USER,
    port: "3306",
    password: process.env.DB_PASS,
    database: 'test_company',
});

app.get("/", cors(corsOptions), (req, res) => {
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query('SELECT * FROM employees', function (err, results, fields) {
            if (err) throw err
    
            res.send(results);
        });
        connection.release();
    })
});

app.listen(5000, () => {
    console.log("Listening to port 5000!")
});