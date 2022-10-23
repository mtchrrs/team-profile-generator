const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern"); 

const assign = require("./lib/createPage");


let team = [];

const createManager = () => {
    inquirer.createPromptModule([
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

const newMember = () => {}