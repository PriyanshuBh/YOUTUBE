const express=require("express");

const videoRouter=require("./routes/videoRoutes");
const authRouter=require("./routes/authRoutes");

const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://youtubeclone:1234@cluster0.5ofd4si.mongodb.net/youtubeclone_220240101107").then(()=>{
    console.log("DB connected");
});
const app=express();
app.use(express.json());
app.use(authRouter);
app.use(videoRouter);

app.listen(3000,onServerStart);

function onServerStart(){
    console.log("server started");
}



