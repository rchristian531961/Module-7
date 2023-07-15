const express=require('express');
PORT=process.env.PORT || 5000
const app=express();

//Link Router Page and Controller
const feedRoute=require('./routes/feedRoutes')

app.use(express.json());
app.use(feedRoute);

app.listen(PORT,()=>{
    ()=>{console.log(`listening at port: http://localhost:${PORT}/`)}
})