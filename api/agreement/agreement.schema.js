class Agreement {
    constructor(basic=0, hra=0,conveyance=0,medical=0,special=0,pf=0,insurance=0,tax=0,salary_id=0) { 
        this.salary_id = salary_id==0?null:salary_id;
        this.basic = basic==0?null:basic;
        this.hra=hra==0?null:hra;
        this.conveyance=conveyance==0?null:conveyance;
        this.medical=medical==0?null:medical,
        this.special=special,
        this.pf=pf,
        this.insurance=insurance,
        this.tax=tax        
    }
  }
module.exports = Agreement;