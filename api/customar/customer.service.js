const dbcon = require("../../config/mysql_db_config");



const add = (customer, callBack) => {
    const {name, gender, email, phone, document_id, pass, image, status}=customer;
    dbcon.query('INSERT INTO customer(name,gender,email,phone,document_id,pass,image,status) VALUES (?,?,?,?,?,?,?,?)', [name, gender, email, phone, document_id, pass, image, status], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const update = (customer, callBack) => {
    const {customer_id,name, gender,email,phone,document_id,pass,image,status}=customer;
    dbcon.query('UPDATE customer SET name=?,gender=?,email=?,phone=?,document_id=?,pass=?,image=?,status=?, WHERE customer_id=?', [name, gender, email, phone, document_id, pass, image, status,customer_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const find = (customer_id, callBack) => {
    dbcon.query('SELECT * FROM customer WHERE customer_id=?', [customer_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const findall = (data, callBack) => {
    dbcon.query('SELECT * FROM customer', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const remove = (customer_id, callBack) => {
    dbcon.query('DELETE FROM customer WHERE customer_id=?', [customer_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,findall,remove}
