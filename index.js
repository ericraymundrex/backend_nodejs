const express=require('express');

const app=express()

const PORT=process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.status(200).send("Hello");
});
app.get("/api/instagram/v1/:name",(req,res)=>{
    inst_res={
        name:"Eric",
        followers: 2000,
        following: 4000,
        name:req.params.name
    };

    res.status(200).json(inst_res);
})
app.listen(PORT,()=>{
    console.log(`Server is running at : ${PORT}\nReach http://localhost:${PORT}/`);
});