const { add, update, find,findall, remove } = require("./associate.service");
const Associate=require('./associate.schema');
let associate=new Associate();
const bcrypt=require('bcrypt');
const saltRounds=10;


const Find_=(request,response)=>{
    let _id=request.params.id;
    if(isNaN(_id))
    response.status(400).json({message:"Invalid Request"});
    else{
        find(_id,(err,result)=>{
            if(err)
            response.status(500).json({message:"Internal Server Error"});
            else if(result.length==0)
            response.status(404).json({message:"No data found"});
            else 
            response.status(200).json(result)
        });
    }
}

const FindAll_=(request,response)=>{
    findall(null,(err,result)=>{
        if(err)
        response.status(500).json({message:"Internal Server Error"});
        else if(result.length==0)
        response.status(404).json({message:"No data found"});
        else 
        response.status(200).json(result)
    });
}



const Add_=(request,response)=>{
     let data=request.body;
     if(data.name==undefined||data.phone==undefined||data.email==undefined||data.pass==undefined ||data.gender==undefined)
     response.status(400).json({message:"Invalid Request"});
     const hash = bcrypt.hashSync(data.pass, saltRounds);
     associate.pass=hash;
     associate.name=data.name;
     associate.email=data.email;
     associate.phone=data.phone;
     associate.status=1;
     associate.gender=data.gender;
     if(request.files == undefined)
     associate.image=null;
     else if(request.files.image==undefined)
     associate.image=null;
     else{
        let image = request.files.image;  
        originalname = image.name;
        fileExt = originalname.split('.').at(-1);
        if(fileExt!='jpg' && fileExt !='jpeg' && fileExt!='png')
        response.status(400).json({message:"Invalid Image"});
        else if(image.size>2000000)
        response.status(400).json({message:"File size To large"});
        else{
            let newName=image.md5+'#_#'+Date.now()+''+'.' + fileExt;
            let uploadPath=(__dirname + '../../../uploads/images/'+newName);
            image.mv(uploadPath, function (err) {
                if (err)
                response.status(500).json({message:"Internal Server Error "});
                else {
                        associate.image=newName;
                        add(associate,(err,result)=>{
                            if(err)
                            response.status(500).json({message:"Internal Server Error"});
                            else{
                            response.status(201).json({message:"data saved successfully",data:result});
                            }     
                    });
                }
            });
        }

     }
}


const Update_=(request,response)=>{
    if(isNaN(request.params.id))
        response.status(400).json({message:"Invalid Request"});
    else{
        find(request.params.id,(err,result)=>{
            if(err)
            response.status(500).json({message:"Internal Server Error"});
            else if(result.length==0)
            response.status(404).json({message:"Invalid request"});
            else 
            {
                //update logic here
                response.status(200).json(result)
            }
        })
    }
}

const Remove_=(request,response)=>{
    let _id=request.params.id;
    if(isNaN(_id))
    response.status(400).json({message:"Invalid Request"});
    else{
        remove(_id,(err,result)=>{
            if(err)
            response.status(500).json({message:"Internal Server Error"});
            else if(result.affectedRows==0)
            response.status(406).json({message:"No Data Found"});
            else 
            response.status(200).json({message:"Data Deleted Successfully"})
        });
    }  
}
module.exports={Find_,FindAll_,Add_,Update_,Remove_}





