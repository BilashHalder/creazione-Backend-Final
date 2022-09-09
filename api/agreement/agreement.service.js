const dbcon = require("../../config/mysql_db_config");



const add = (file_url, callBack) => {
    dbcon.query('INSERT INTO agreement (file_url) VALUES (?)', [file_url], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const update = (agreement, callBack) => {
    dbcon.query('UPDATE agreement SET upload_on=CURRENT_TIMESTAMP,file_url=? WHERE agreement_id=?', [agreement.agreement_id,agreement.file_url], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

const find = (agreement_id, callBack) => {
    dbcon.query('SELECT * FROM agreement WHERE agreement_id=?', [agreement_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const findall = (agreement_id, callBack) => {
    dbcon.query('SELECT * FROM agreement', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
const remove = (agreement_id, callBack) => {
    dbcon.query('DELETE FROM agreement WHERE agreement_id=?', [agreement_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,findall,remove}
