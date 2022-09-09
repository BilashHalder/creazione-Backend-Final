class Agreement {
    constructor(agreement_id=null, file_url="",upload_on="",printed_on="") { 
        this.agreement_id = agreement_id;
        this.file_url = file_url==""?null:file_url;
        this.upload_on=upload_on==""?null:upload_on;
        this.printed_on=printed_on==""?null:printed_on;       
    }
  }
module.exports = Agreement;