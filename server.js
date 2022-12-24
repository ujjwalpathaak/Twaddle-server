import express from "express";
import Connection from "./database/connectDB.js";
import Routes from "./routes/Routes.js";
import bodyParser from "body-parser";
import cors from "cors";

var PORT = process.env.PORT || 5000;

const app = express();

// Using cors
app.use(cors());

// Connecting Database
Connection();

//Declaring Routes
app.use("/", Routes);

// Misc
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Server
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});