const inquirer = require("inquirer");

const render = require("./lib/HTMLrender");

const Manager = require("./lib/constructors/Manager");
const Engineer = require("./lib/constructors/Engineer");

const teamMembers = [
    //   new Manager("Manny", 1, "manny@heiscool.com", 200),
    //   new Engineer("Chaz", 2, "chaz@heiscool.com", "viachaz"),
    //   new Intern("vas", 3, "vas@heiscool.com", "UofA"),
    //   new Intern("Caleb", 4, "caleb@heiscool.com", "ASU")
];

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your manager's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your manager's email?"
        },
        {
            type: "input",
            name: "office",
            message: "What is your manager's office number?"
        }

    ]).then(function (answers) {
        const manager = new Manager(answers.name, parseInt(answers.id), answers.email, parseInt(answers.office));
        teamMembers.push(manager);
        addMember();
    });
}

function addMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "type",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members"
            ]

        }
    ]).then(function(answer) {
        if(answer.type === "Engineer") {
            createEngineer();
        }
        else if (answer.type === "Intern") {
            createIntern();
        }
        else {
            render(teamMembers);
        }

    })
}

function createEngineer () {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your engineer's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineer's github?"
        }

    ]).then(function (answers) {
        const engineer = new Engineer(answers.name, parseInt(answers.id), answers.email, answers.github);
        teamMembers.push(engineer);
        addMember();
    });

}
