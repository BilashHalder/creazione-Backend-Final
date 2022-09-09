const { add, update, find,findall, remove } = require("./bank_account.service");


const Find_=(request,response)=>{
    response.send("find")
}

const FindAll_=(request,response)=>{
    response.send("findall")
}
const Add_=(request,response)=>{
    response.send("add")
}
const Update_=(request,response)=>{
    response.send("update")
}

const Remove_=(request,response)=>{
    response.send("delete")  
}
module.exports={Find_,FindAll_,Add_,Update_,Remove_}





