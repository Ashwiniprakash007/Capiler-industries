const express=require("express");
const fs=require("fs");
const { nextTick } = require("process");
const  app= express()
const cors = require("cors")
app.use(cors());
app.use(express.json())

const postsRoutes=require("./routes/posts.routes")

app.use("/posts/create",postsRoutes)

app.get("/",(req,res)=>{
   
    res.send("welcome to home page")
})

app.get("/posts",(req,res)=>{
    const result =fs.readFileSync("./posts.json",{encoding:"utf-8"})
    const parsed_result=JSON.parse(result)
    const {posts}=parsed_result
    res.send(posts)
})


app.patch("/posts",(req,res)=>{
    const {id,author}=req.body;
    const prev_data=fs.readFileSync("./posts.json",{encoding:"utf-8"})
    const parsed_prevdata=JSON.parse(prev_data);
    const new_data=parsed_prevdata.posts.map((ele)=>{
        if(ele.id ===id){
            return{...ele,author}
        }
        else{
            return ele;
        }
    })
    parsed_prevdata.posts=new_data;
    
    const latest_data=JSON.stringify(parsed_prevdata);
    fs.writeFileSync("./posts.json", latest_data, "utf-8")
    res.send("456.134.322.100")
})
   const guard=(req,res,next)=>{
      const {password}=req.query
      if(password==="54123"){
        next()
      }
      else{
        res.send("You are not authorised to do this operation")
      }
   }
   app.use(guard)


app.delete("/posts",(req,res)=>{
    const {id}=req.body;
    
    
    const prev_data=fs.readFileSync("./posts.json",{encoding:"utf-8"})
    const parsed_prevdata=JSON.parse(prev_data);
    const new_data= []
    parsed_prevdata.posts.map((ele)=>{
       
        if(ele.id !==id){
            new_data.push(ele)
        }
     
    })
 
    parsed_prevdata.posts=new_data;
    
    const latest_data=JSON.stringify(parsed_prevdata);
    fs.writeFileSync("./posts.json", latest_data, "utf-8")
    res.send("456.134.322.100")
})


app.listen(8080, ()=>{
    console.log("server 8080")
})