//migrating to modern ES module framework
import {Router} from "express";
import { createUserApplication } from "../controllers/signupController";

const router = Router(); // Router Instance 
router.post("/submit", createUserApplication);

export default router;


/***
 * purpose of the router file -
 * tells the application what functions to call when 'submit' is hit
 * +where to send the information from the front end gotten to
 * it... routes... the information...
 * *insert that one smiling friends gif here*
 */

/** NOTES
 *  CommonJS edition(old) 
 * /** const express = require("express"); //small reminder, nodeJS framework for application features
const router = express.Router(); 
const sign_upFunctions = require("../controllers/signupController");  //links to the controller file holding the function to run on call

  //router.post("/submit", sign_upFunctions.submit_user_application);

  for iinstances, a bracket must be added , else only a reference to the function.

  + imports must be called from a string path, not a variable
  * curly brackets {} are required for named imports within a module, else the
  system will attempt to rename to default export to the un{} name

  //OR: import express from "express"; const router = express.Router();\

  ** router.post() .. registers a post route, which now listens to post requests
                    - submit is the url path [i.e where it looks for responses]
                    -the function 'subMitForm' is what runs when a  POST request is to{by] the submit}

    export defualt router - makes the router, with the added routes and modifications, available to the rest of the application files
                    
 */