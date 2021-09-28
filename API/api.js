express=require('express')
cors=require("cors")
bodyParser = require('body-parser')

app=express()

const corsOrigin={
    origin:"http://localhost:3000"
}

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.use(cors(corsOrigin))

app.post("/saveImg",(req,res)=>{
    console.log(req.body)
    res.send("holas holas")
})

app.listen("5000",()=>{
    console.log("serveur connectez")
})