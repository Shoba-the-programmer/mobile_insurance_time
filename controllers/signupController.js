//const db_access_information = require("../database_information/db_accessor");  //require db login info
import pool from "../database_information/db_query_functions.js";
const db_access_information = pool;

import { createApplicantTable } from "../database_information/db_query_functions.js";

export async function createUserApplication (req, res) {
    const {applicant_nametem_insured, total_cost} = req.body;

    try {
        //try connecting to the database and querying
        await db_access_information.query(
            "INSERT INTO demo_customer_applications VALUES($1,$2,$3)", [applicant_name,item_insured, total_cost]
        );
        //if successful
        res.send("Application submitted successsfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Database error"); //borrowed line
    }
}
