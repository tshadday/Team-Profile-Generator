const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

function startQuestions() {
    console.log("Please build your team");
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your team manager's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is your team manager's id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your team manager's email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is your team manager's office number?"
            },
        ]).then((managerInfo) => {
            new Manager (managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
            newEmployee();
        });
}
startQuestions()