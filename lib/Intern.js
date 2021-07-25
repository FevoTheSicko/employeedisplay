
const Employee = require('./Employee')

class Intern extends Employee {
    constructor(school, name, id, email) {
        super(name, id, email)
        this.school = school
    }
    getschool() {
        return ` School: ${this.school}`
    }
    getRole() {
        return "Role: Intern"
    }
}


module.exports = Intern