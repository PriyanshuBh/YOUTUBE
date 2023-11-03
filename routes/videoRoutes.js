const express=require("express");

const videoRouter=express.Router();

let a=[];

videoRouter.get('/video',(res,req)=>{
    res.send(a);
})
videoRouter.post('/video',(res,req)=>{
    a.push(1);
    res.send(a);
})
videoRouter.put('/video',(res,req)=>{
    a[0]=2;
    res.send(a);
})
videoRouter.delete('/video',(res,req)=>{
    a.pop();
    res.send(a);
})
module.export=videoRouter;