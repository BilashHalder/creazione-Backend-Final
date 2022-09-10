const dbcon = require("../../config/mysql_db_config");



const add = (payment, callBack) => {
    const {transaction_time, purpose, payment_mode, to_account, ammount, status, transaction_id}=payment;
    dbcon.query('INSERT INTO payment( transaction_time, purpose, payment_mode, to_account, ammount, status, transaction_id) VALUES (?,?,?,?,?,?,?)', [ transaction_time, purpose, payment_mode, to_account, ammount, status, transaction_id], (err, result, fields) => {
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

const update = (data, callBack) => {
    dbcon.query('UPDATE payment SET transaction_time=?,purpose=?,payment_mode=?,to_account=?,ammount=?,status=?,transaction_id=? WHERE payment_id=?', [transaction_time, purpose, payment_mode, to_account, ammount, status, transaction_id,payment_id,], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const find = (payment_id, callBack) => {
    dbcon.query('SELECT * FROM payment WHERE payment_id=?', [payment_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


const findall = (to_account, callBack) => {
    dbcon.query('SELECT * FROM payment WHERE to_account=?', [to_account], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const remove = (payment_id, callBack) => {
    dbcon.query('DELETE FROM payment WHERE payment_id=?', [payment_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,findall,remove}
