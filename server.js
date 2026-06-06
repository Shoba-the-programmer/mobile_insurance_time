import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import signupRoute from "./routers/signupRoute.js";

const app = express();  //set app as an express instance

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"site_files")));

app.use("/", signupRoute);

const PORT = 3200;
app.listen(PORT, () => console.log("Server running on port " + PORT));

