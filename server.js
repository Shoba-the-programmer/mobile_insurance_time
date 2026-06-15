import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import {createApplicantTable} from './database_information/db_query_functions.js';
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import signupRoute from "./routers/signupRoute.js";

const app = express();  //set app as an express instance

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//get the static files
app.use(express.static(path.join(__dirname,"site_files")));

//API Route
app.use("/", signupRoute);

//set the homepage route
app.get('/',
    function(req, res) {
    res.sendFile('mit_homepage.html', {'root': './site_files'});
});

//import database table
createApplicantTable(); //check if exists, rewrite later

const PORT = 3200;
app.listen(PORT, () => console.log("Server running on port " + PORT));

