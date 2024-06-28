const mysql = require("mysql");

var mysqlConexion;

function handleDisconnect() {
    mysqlConexion = mysql.createConnection({
        host: "193.203.166.112",
        user: "u475816193_onlywater",
        password: "Sf~l7A81:8z",
        database: "u475816193_onlywater",
        multipleStatements: true,
    });

    mysqlConexion.connect((err) => {
        if (!err) {
            console.log("Estoy conectado a la base de datos MySQL");
        } else {
            console.log("No estoy conectado. Error:", err);
        }
    });

    mysqlConexion.on('error', (err) => {
        console.log("Error de conexión:", err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'ECONNRESET') {
            console.log("Reconectando...");
            handleDisconnect();
        } else {
            throw err;
        }
    });
}

handleDisconnect();

module.exports = mysqlConexion;

