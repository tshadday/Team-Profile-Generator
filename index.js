const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// holds team members
var team = [];

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
            var new_manager = new Manager (managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.office_number);
            // adds new manager to team array
            team.push(new_manager);
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
            var new_engineer = new Engineer (engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);
            team.push(new_engineer);
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
            var new_intern = new Intern (internInfo.name, internInfo.id, internInfo.email, internInfo.school);
            team.push(new_intern);
            newEmployee();
        });
};

// runs when no more team members are added
// generates the html file
function finished() {
    fs.writeFile("./dist/index.html", newTeamPage, function (err) {
        if (err) throw err;
        console.log("HTML file created in dist folder")
    })
};


var newTeamPage = ``

// starts the questions
startQuestions()