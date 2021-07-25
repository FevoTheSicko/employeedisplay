const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email)
        this.github = github
    }
    getgithub() {
        return `github: ${this.github}`
    }
    getRole() {
        return "Role: Engineer:"
    }
}

module.exports = Engineer