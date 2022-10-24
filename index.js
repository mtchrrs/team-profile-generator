const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern"); 

const assign = require("./lib/createPage");


let team = [];

const createManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Managers Name:"
        },
        {
            type: "input",
            name: "managerId",
            message: "Managers ID:"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Managers Email:"
        },
        {
            type: "input",
            name: "managerOffice",
            message: "Managers Office Number:"
        }
    ]).then( (data) => {
        const { managerName, managerId, managerEmail, managerOffice } = data;
        const employee = new Manager(managerName, managerId, managerEmail, managerOffice);
        team.push(employee);
        newMember();
    })
};

const newMember = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "addMember",
            choices: [
                "Add an Engineer",
                "Add an Intern",
                "Don't add anyone else"
            ]
        }
    ]).then( (data) => {
        if (data.addMember == "Add an Engineer") {
            inquirer.prompt([
                {
                type: "input",
                name: "engineerName",
                message: "Engineer Name:"
                },
                {
                type: "input",
                name: "engineerId",
                message: "Engineer Id:"
                },
                {
                type: "input",
                name: "engineerEmail",
                message: "Engineer Email:"
                },
                {
                type: "input",
                name: "engineerGithub",
                message: "Engineer github:"
                },
            ]).then( (data) => {
                const {engineerName, engineerId, engineerEmail, engineerGithub} = data;
                const employee = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
                team.push(employee);
                newMember();
            })
        } else if (data.addMember == "Add an Intern") {
            inquirer.prompt([
                {
                type: "input",
                name: "internName",
                message: "Intern Name:"
                },
                {
                type: "input",
                name: "internId",
                message: "Intern Id:"
                },
                {
                type: "input",
                name: "internEmail",
                message: "Intern Email:"
                },
                {
                type: "input",
                name: "internSchool",
                message: "Intern School:"
                },
            ]).then( (data) => {
                const {internName, internId, internEmail, internSchool} = data;
                const employee = new Intern(internName, internId, internEmail, internSchool);
                team.push(employee);
                newMember();
            })
        } else {
            console.log("Not adding any new team members, creating new page");
            const teamPage = assign(team);
            createPage(teamPage);
        }
    });
}

function createPage(data) {
    fs.writeFile('./dist/index.html', data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("BOOM, team page ready for action!");
        }
    })
}

createManager();