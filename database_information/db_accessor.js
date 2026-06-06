import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "mobile_insurance_time",
    port: "5433",
    password: "sw33th34rt"
});

export default pool;