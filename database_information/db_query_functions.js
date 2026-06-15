import dotenv from "dotenv";
dotenv.config();

import { onlineClient } from "./db_access_info";

// ------------------ now the database querying code, now the access has been added ----

//check if the table exists, create if it does not
export async function createApplicantTable(){
  const create_userApplicationTable_query = `
    CREATE TABLE IF NOT EXISTS customer_applications(
        applicant_id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        item_to_insure VARCHAR(255) NOT NULL,
        item_cost float
    );
    `;
    try {
        await onlineClient.query(create_userApplicationTable_query);
        console.log("Applicant table created or already exists");
    } catch(error) {
        console.error("Error creating applicant table", error);
    }
}
