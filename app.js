//initilization
const express = require("express");
const app = express();

const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
//middleware
app.use(express.json());
//Cors
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
//access-control-allow-credentials:true
app.use(cors(corsOptions)); // Use this after the variable declaration

//port
const port = process.env.PORT;

// DB Connection
const connection = require("./DB/mongoose");

//routes
const router = require("./Routes/clientsignuplogin");
app.use("/", router);

const router1 = require("./Routes/projectroute");
app.use("/", router1);

const router2 = require("./Routes/freelancersignuplogin");
app.use("/", router2);

const router3 = require("./Routes/applyproject");
app.use("/", router3);

//listen app
app.get("/", (req, res) => {
  res.send("server running sucessfully......");
});

app.listen(port, () => {
  console.log(`server running....`);
});
