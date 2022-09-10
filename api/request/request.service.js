const { request } = require("express");
const dbcon = require("../../config/mysql_db_config");



const add = (request, callBack) => {
    const {requset_type, customer_id, request_date, comments, status}=request;
    dbcon.query('INSERT INTO request(requset_type, customer_id, request_date, comments, status) VALUES (?,?,?,?.?)', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const update = (request, callBack) => {
    const {requset_type, customer_id, request_date, comments, status,request_id}=request;
    dbcon.query('UPDATE request SET requset_type=?,customer_id=?,request_date=?,comments=?,status=? WHERE request_id=?', [requset_type, customer_id, request_date, comments, status,request_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const find = (request_id, callBack) => {
    dbcon.query('SELECT * FROM request WHERE request_id=?', [request_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const findall = (data, callBack) => {
    dbcon.query('SELECT * FROM request', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


const remove = (request_id, callBack) => {
    dbcon.query('DELETE FROM request WHERE request_id=?', [request_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,findall,remove}
