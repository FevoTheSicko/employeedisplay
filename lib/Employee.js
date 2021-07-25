

class Employee {
    constructor(name, id, email) {
        this.name = name
        this.email = email
        this.id = id
    }

    getName() {
        return `Name: ${this.name}`
    }


    getId() {
        return `id: ${this.id}`
    }


    getEmail() {
        return `email: ${this.email}`
    }
    getRole() {
        return 'Employee:'
    }

}

module.exports = Employee




