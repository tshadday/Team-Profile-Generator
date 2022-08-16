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
                name: "office_number",
                message: "What is your team manager's office number?"
            },
        ]).then((managerInfo) => {
            new Manager (managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.office_number);
            newEmployee();
        });
};

function newEmployee() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "new_employee",
                message: "What type of team member would you like to add?",
                choices: ["Engineer", "Intern", "None, I am finished"]
            }
        ]).then((answer) => {
            if (answer.new_employee === "Engineer") {
                newEngineer();
            } else if (answer.new_employee === "Intern") {
                newIntern();
            } else {
                finished();
            }
        })
};

function newEngineer() {
    console.log("New Engineer:")
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your team engineer's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is your team engineer's id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your team engineer's email?"
            },
            {
                type: "input",
                name: "github",
                message: "What is your team engineer's github?"
            },
        ]).then((engineerInfo) => {
            new Engineer (engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);
            newEmployee();
        });
};

function newIntern() {
    console.log("New Intern:")
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your team intern's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is your team intern's id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your team intern's email?"
            },
            {
                type: "input",
                name: "school",
                message: "What is your team intern's school?"
            },
        ]).then((internInfo) => {
            new Intern (internInfo.name, internInfo.id, internInfo.email, internInfo.school);
            newEmployee();
        });
};

function finished() {

};

startQuestions()