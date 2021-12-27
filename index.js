import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import * as path from 'path';
// Deployed link https://node-filesys.herokuapp.com/
const app = express();
const PORT = process.env.PORT || 9000;

app.get("/",async(req,resp) => {
    //resp.send("hello world")
    let paths = "C:";
    console.log(process.cwd())
    let dateObj = new Date();
    let timeStamp = Date.now();
    var date = dateObj.getFullYear()+'-'+(dateObj.getMonth()+1)+'-'+dateObj.getDate();
    var time = dateObj.getHours() + "-" + dateObj.getMinutes() + "-" + dateObj.getSeconds();
    var dateTime = date+"_"+time;
    paths = paths + "/" + dateTime+".txt"
    fs.writeFile(paths, dateObj.toString(),function (err,content) {
        //     //console.log("writing done")
        console.log(content)
        console.log(err)
        resp.send("file created successfully at "+paths) 
    })
    
        
})

app.listen(PORT, () => {console.log("server started")})
