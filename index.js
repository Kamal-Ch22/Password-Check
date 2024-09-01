//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyparser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const port=3000;
const app= express();
var ans=false;
app.use(bodyparser.urlencoded({extended:true}));
function passwordCheck(req,res,next)
{
    const pw=req.body["password"];
    if(pw==="ILoveProgramming")
    {
       ans=true;
    }
    next();
}
app.use(passwordCheck);

app.get("/", (req,res)=>{
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check",(req,res)=>{
    // if(req.body["password"]==="ILoveProgramming"){
    // res.sendFile(__dirname + "/public/secret.html");
    // }
    // else{
    //     res.sendFile(__dirname + "/public/index.html");
    // }
    if(ans)
    {
        res.sendFile(__dirname + "/public/secret.html");
        ans=false;
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }
});
app.listen(port,()=>{
    console.log(`Listening on Port ${port}`);
})