const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Načítaj environmentálne premenné tu

class dbConnect {
    connect() {
        mongoose.connect(process.env.DB_CONNECT, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        })
            .then(() => console.log("Pripojenie k databáze úspešné!"))
            .catch(err => console.error("Chyba pri pripojení k databáze:", err));
    }
}

module.exports = new dbConnect();

