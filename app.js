require('dotenv').config();
const express=require("express");
const fileUpload = require('express-fileupload');
const cors = require('cors');




const app=express();

/**************************************
 * import all routes
 *****************************************/
const AgreementRouter=require("./api/agreement/agreement.route");











/***********************************
 *       All Middlewares
 **********************************/
 app.use(cors());
 app.use(express.json());
 app.use(fileUpload());






////////////////////All Routes(localhost:5000/api/) base url
//domain:port/api/dbname
/////////////////////////
app.use("/api/agreement",AgreementRouter);



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
     app.listen(5000,()=>{
        console.log(`Api Server Running on Port No : 5000`);
    });
