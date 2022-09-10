const dbcon = require("../../config/mysql_db_config");



const add = (employee, callBack) => {
    const {name,gender,email,phone,document_id,pass,image,status,employee_id}=employee;
    dbcon.query('INSERT INTO employee(name,gender,email,phone,document_id,pass,image,status) VALUES (?,?,?,?,?,?,?,?)', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        else{
            find(result.insertId,(err,res)=>{
                if(err)
                return callBack(err);
                else
                return callBack(null,res);
            })
        }
    });
}

const update = (employee, callBack) => {
    const {name,gender,email,phone,document_id,pass,image,status,employee_id}=employee;
    dbcon.query('UPDATE employee SET name=?,gender=?,email=?,phone=?,document_id=?,pass=?,image=?,status=? WHERE employee_id=?', [name,gender,email,phone,document_id,pass,image,status,employee_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const find = (employee_id, callBack) => {
    dbcon.query('SELECT * FROM employee WHERE employee_id=?', [employee_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const findall = (data, callBack) => {
    dbcon.query('SELECT * FROM employee', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const remove = (employee_id, callBack) => {
    dbcon.query('DELETE FROM employee WHERE employee_id=?', [employee_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,findall,remove}
