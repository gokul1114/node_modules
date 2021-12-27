import express from "express";
import dotenv from "dotenv";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 9000;

app.get("/",async(req,resp) => {
    //resp.send("hello world")
 
    let dateObj = new Date();
    let timeStamp = Date.now();
    var date = dateObj.getFullYear()+'-'+(dateObj.getMonth()+1)+'-'+dateObj.getDate();
    var time = dateObj.getHours() + "-" + dateObj.getMinutes() + "-" + dateObj.getSeconds();
    var dateTime = date+"_"+time;
    fs.writeFile("./"+dateTime+".txt", dateObj.toString(),function (err,content) {
        //     //console.log("writing done")
        console.log(dateTime, dateObj.toString())
        console.log(err)
        resp.send("file created successfully") 
    })
    
        
})

app.listen(PORT, () => {console.log("server started")})
