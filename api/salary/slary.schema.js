class Salary {
    constructor(salary_id = null, basic = 0,hra=0,conveyance=0,medical=0,special=0,pf=0,insurance=0,tax=0) {
        this.salary_id = salary_id;
        this.basic = basic;
        this.hra = hra;
        this.conveyance = conveyance;
        this.medical = medical;
        this.special = special;
        this.pf = pf;
        this.insurance = insurance;
        this.tax = tax;
    }
}
module.exports = Salary;