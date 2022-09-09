class Request {
    constructor(request_id = null, requset_type = -1,customer_id=-1,request_date="",comments="",status=-1) {
        this.request_id = request_id;
        this.requset_type = requset_type == -1 ? null : requset_type;
        this.customer_id = customer_id == -1 ? null : customer_id;
        this.request_date = request_date == "" ? null : request_date;
        this.comments = comments == "" ? null : comments;
        this.status = status == -1 ? null : status;
    }
}
module.exports = Request;