const express = require("express");
const bodyParser = require("body-parser");
const infoplantas = require("./routes/tabla_infoplantas");

const app = express();
app.use(bodyParser.json());
app.use("/infoplantas", infoplantas);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
