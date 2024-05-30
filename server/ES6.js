const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')
const { request, response } = require('express')

const app = express()
app.use(cors())
app.use(express.json())

const uri ="mongodb+srv://pavan:pavan@cluster0.idbadvj.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri);
client.connect(); //cluster conn

const db=client.db("database"); //database
const col=db.collection("Information"); //collection //documents

app.get('/',(request,response) => {
  response.send('This is a Server')
})

app.post('/insert', (request,response) => {
  col.insertOne(request.body)
  console.log(request.body)
  response.send(request.body)
})

app.get('/check',(req,res)=>{
   console.log(req.query)
  async function find(){
    try{
      const result=await col.findOne({email:req.query.un})
      //console.log(result)
      if(result == null)
      {
        res.send("FAIL")
        
      }
      else{
        if(req.query.pw === result.password)
        {
          res.send("PASS")
        }
        else
        {
          res.send("FAIL")
        }

      }
      
    }
    finally{}  
  }
  find().catch(console.dir)
})

app.listen(8001)
console.log("server started")