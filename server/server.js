const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const db = require("./database")

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.post("/addPlayer", async(req,res)=>{

const player = req.body

await db.collection("players").insertOne(player)

res.send({status:"success"})

})

app.get("/players", async(req,res)=>{

const players = await db.collection("players").find().toArray()

res.json(players)

})

app.listen(5000,()=>{

console.log("Server running on port 5000")

})
