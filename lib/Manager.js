const Employee = require ("./Employee.js");

class Manager extends Employee {
    constructor (name, id, email, officeNbr) {
        super (name, id, email);
        this.officeNbr = officeNbr;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNbr() {
        return this.officeNbr;
    }
}

module.exports = Manager;