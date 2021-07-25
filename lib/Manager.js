const Employee = require('./Employee')

class Manager extends Employee {

    constructor(id, name, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getofficenumber() {
        return `Office-number:  ${this.officeNumber}`
    }

    getRole() {
        return "Role: Manager"
    }
}

module.exports = Manager
