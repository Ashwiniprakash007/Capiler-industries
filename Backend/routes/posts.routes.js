const {Router}=require("express");
const fs=require("fs")

const postsRoutes=Router()
const validator=(req,res,next)=>{
    const {id,title,content,author,image}=req.body;
    console.log(typeof id)
    if(id && typeof(id)=="number" && title && typeof(title)=="string" && content && typeof(content)=="string"&& author&&typeof(author)=="string"){
      next()
    }
    else {
      res.send("Validation Failed")
    }
  }
 

postsRoutes.post("/",(req,res)=>{
    const log=req.body;
    const prev_data=fs.readFileSync("./posts.json",{encoding:"utf-8"})
    const parsed_prevdata=JSON.parse(prev_data);
    const {posts}=parsed_prevdata
    posts.push(log);
    const latest_data=JSON.stringify(parsed_prevdata);
    fs.writeFileSync("./posts.json", latest_data, "utf-8")
    res.send("456.134.322.100")
})
postsRoutes.use(validator)
module.exports=postsRoutes;