const mongoose = require("mongoose");

// here we connect the odm(object document maper) mongoose to the dbms mongodb.

mongoose.connect("mongodb+srv://sachinsatpute148:Sachin123@sachin.jdmncnx.mongodb.net/",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});




const db = mongoose.connection; // db store the connection

// cheacking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DATABASE connection is Established");
});

// exporting the connection.
module.exports = db;
