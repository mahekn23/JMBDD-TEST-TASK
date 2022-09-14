const express=require("express");
const cors=require("cors");
const { MongoClient } = require("mongodb");

const PORT = 9000;

const app=express();
app.use(cors());
app.use(express.json());

const url = "mongodb://localhost:27017";

let d = new Date();
let month = parseInt(d.getMonth())+1;
let year =d.getFullYear();

app.post("/create", (req, res)=>{//create server
    MongoClient.connect(url, (err, database)=>{
        if(err){
            console.log(err);
        }
        else{
            const dbo = database.db("mahek140922");
            const data = {
                "person_1": req.body.p1,
                "person_2": req.body.p2,
                "person_3": req.body.p3,
                "person_4": req.body.p4,
                "Task": req.body.Task,
                "Time": req.body.Time,
                "Month": month
            };
            dbo.collection("appt_collection").insertOne(data, (err, result)=>{
                if(err){
                    res.send(err);
                }
                else{
                    res.send(result);
                }
            });
        }
    });
});

app.get("/fetch", (req, res)=>{//fetch server
    MongoClient.connect(url, (err, database)=>{
        if(err){
            console.log(err);
        }
        else{
            const dbo = database.db("mahek140922");
            dbo.collection("appt_collection").find({}).toArray((err, result)=>{
                if(err){
                    res.send(err);
                }
                else{
                    res.send(result);
                }
            });
        }
    });
});

app.listen(PORT, ()=>{
    console.log("server ready at port "+PORT+"!!");
});
