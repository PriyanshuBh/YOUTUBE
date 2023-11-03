const express=require("express");

const videoRouter=require("./routes/videoRoutes");

const mongoose=require("mongoose");

mongoose.connect('mongodb://localhost:27017/youtube').then(()=>{
    console.log("DB connected");
})
const app=express();
app.use(express.json());

// app.use('/video', (req,res)=>{
//     res.send("Hello");
// })
// app.use('/', (req,res)=>{
//     res.send("started");
// })




// app.post('/video', (req,res)=>{
//     console.log(req.body);
//     res.send([1,2,3,4]);
// })





// app.get('/video', (req,res)=>{
//     res.send("Hiiii");
// })
// app.post('/video', (req,res)=>{
//     res.send([1,2,3,4]);
// })

// const video=[{title:"youtube video 1", Thumbnail:"httpjkfsjfs"},
// {title:"youtube video 1", Thumbnail:"httpjkfsjfs"},
// {title:"youtube video 1", Thumbnail:"httpjkfsjfs"},
// {title:"youtube video 1", Thumbnail:"httpjkfsjfs"},
// {title:"youtube video 1", Thumbnail:"httpjkfsjfs"}]


// app.get('/title', (req,res)=>{
//     res.send(video);
// })



app.use(videoRouter);

app.listen(3000,onServerStart);

function onServerStart(){
    console.log("server started");
}