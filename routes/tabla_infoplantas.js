const express = require("express");
const Router = express.Router();
const mysqlConexion = require("../conexion");

Router.get("/", (req, res) => {
    mysqlConexion.query("SELECT * from infoplantas", (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
            res.status(500).send(err);
        }
    });
});

module.exports = Router;
