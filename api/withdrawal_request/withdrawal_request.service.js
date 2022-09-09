const dbcon = require("../../config/mysql_db_config");



const add = (data, callBack) => {
    dbcon.query('', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const update = (data, callBack) => {
    dbcon.query('', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const find = (data, callBack) => {
    dbcon.query('', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const remove = (data, callBack) => {
    dbcon.query('', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,remove}
