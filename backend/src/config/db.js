const mysql = require("mysql2")
const pool = mysql.createPool({
host:"mysql",
user:"root",
password:"root",
database:"invoice_saas"
})
module.exports = pool.promise()
