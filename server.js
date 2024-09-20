const express = require("express"); /* pomocou expressu si tu tvoríme server */
//const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./databaze/connect"); 
//require('dotenv').config(); // Načítaj environment variables

db.connect();


app.get("/", (request, response) => {
    response.send("Si na hlavnej stránke, hehe");
});

app.listen(PORT, (err) => {
    if (err) {
        console.error("Chyba pri štarte servera:", err);
    } else {
        console.log(`Server beží na ${PORT}!`);
    }
});
