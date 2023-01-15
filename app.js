require("dotenv").config()
require("express-async-errors")

const express = require("express")
const app = express()

const approuter = require("./routes/router")
//router
app.use("/api/v1",approuter)

const port=3000

const start = async()=>{
    console.log("Starting Server..")
    app.listen(port,console.log("Server is listening to port: "+port))
}

start()