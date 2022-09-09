const {add,update,find,remove}=require("./nominee.service");
const Nominee=require('./nominee.schema');

const nominee=new Nominee(null,"new nominee","11/2/90")


const AddNominee=(req,res)=>{
    data=req.body;
    if(data.customer_id==undefined || data.name==undefined || data.dob==undefined)
    res.json({message:"invalid data" });
    else{
        find(data.customer_id,(err,result)=>{
            if(err)
                 res.status(500).json({ message:"internal server error" });           
             else if(result.length)
                 res.status(200).json({ message:"nominee already exist" });
            else{
                add(data,(err,result)=>{
                    if(err)
                        res.status(500).json({ message:"internal server error" });
                    else{
                        data.id=result.insertId;
                        res.status(200).json(data);
                    }  
                });
            }
        })
    }
}

const UpdateByCutomerId = (req, res) => {
    data=req.body;
    if (data.customer_id == undefined || data.name == undefined || data.dob == undefined)
        res.json({ message: "invalid data" });
    else {
        update(data, (err, result) => {
            if (err)
                res.status(500).json({ message: "internal server error" });
            else if (result.affectedRows) {
                return res.status(200).json({
                    message: "data updated"
                });
            }
            else {
                res.status(400).json({ message: "invalid information" });
            }
        });
    }

}

const FindNominee=(req,res)=>{
    if(req.params.id==undefined){
        res.status(400).json({
            message:"invalid data"
            }); 
    }
    else{
        find(req.params.id,(err,result)=>{
            if(err){
                return res.status(500).json({
                    message:"internal server error"
                }); 
            }
            else{
                if(result.length==0){
                    return res.status(400).json({
                        message:"No data Found"
                    });  
                }
                result=result[0];
                return res.status(200).json({
                    data:result
                });
            }
        });
    }
}

const DeleteNominee=(req,res)=>{
    if(req.params.id==undefined || isNaN(req.params.id)){
        res.status(400).json({
            message:"invalid data"
            });
    }
    else{
        remove(req.params.id,(err,result)=>{
            if(err)
                    res.status(500).json({ message:"internal server error"});
                    else if(result.affectedRows==0)
                    res.status(400).json({ message:"invalid request"});
                    else 
                    res.status(200).json({message:"data deleted"});
        });
    }
}

module.exports={AddNominee,UpdateByCutomerId,FindNominee,DeleteNominee}