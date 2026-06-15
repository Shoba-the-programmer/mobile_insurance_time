import pkg from "pg";
const { Pool } = pkg;

import { Client } from 'pg';

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "mobile_insurance_time",
    port: "5433",
    password: "sw33th34rt"
});

const onlineClient = new Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT,
    password: process.env.PG_PASSWORD
});

export {onlineClient}
export default pool;

//keeping the pool/database login information in a separate file purely for calling
//less clutter and insecuirty now
//will hide the demo pool information too