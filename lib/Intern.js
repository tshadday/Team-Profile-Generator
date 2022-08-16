const Employee = require ('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        this.school = school;

        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getSchool() {

    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;