const express = require('express')
const app = express();
const cors = require('cors');
app.use(express.json());
require('dotenv').config(); //it is neccessary to get the env variables from .env
const dbConfig = require("./config/dbConfig");


const port = process.env.PORT || 5000;

app.use(cors());

const contactRoute = require("./routes/contactRoutes") 
app.use("/api/contact", contactRoute);


app.listen(port , ()=> console.log(`Node Js server started at ${port}`))

