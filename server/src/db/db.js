const mongoose = require("mongoose");

function ConnectToDB() {
    mongoose.connect(process.env.DB_URL)
    .then(() =>{
        console.log("Connected to the DB");
    })
    .catch((err) =>{
        console.log("Error connecting to the database", err);
    });
}

module.exports = ConnectToDB;