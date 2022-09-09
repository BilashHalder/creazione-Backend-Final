require('dotenv').config();
/////////////////////////////////////////
const express=require("express");

////////////////////////////////////////
const app=express();



/////////////////All Middlewares/////////////////////////


////////////////////All Routes/////////////////////////




////////////////////////***End Routing*/////////////////////////////

/************************
 * Api Documentaion Url
 *************************/
 app.get("/",(request,response)=>{
    response.send("API Documentation");
});




/****************************
 * To handle all invalid request
 * ***************************/

 app.all("*",(request,response)=>{
    response.status(500).json({
        message:"invalid request"
    });
    });


/*Server Initilization */
     app.listen(process.env.APP_PORT,()=>{
        console.log(`Api Server Running on Port No : ${process.env.APP_PORT}`);
    });
