const Employee = require("../src/employee");

const createManager = (Manager) => {
    return `
    <div class="card-container>
        <div class="card-top">
            <h1>${Manager.name}</h1>
            <h2>Manager</h2>
        </div>
        <div class="card-bottom">
            <div><p>ID: ${Manager.id}</p></div>
            <div><span>Email: </span><span><a href="mailto:${Manager.email}">${Manager.email}</a></span></div>
            <div><p>Office: ${Manager.office}</p></div>
        </div>
    </div>
    `
}

const createEngineer = (Engineer) => {
    return `
    <div class="card-container>
        <div class="card-top">
            <h1>${Engineer.name}</h1>
            <h2>Engineer</h2>
        </div>
        <div class="card-bottom">
            <div><p>ID: ${Engineer.id}</p></div>
            <div><span>Email: </span><span><a href="mailto:${Engineer.email}">${Engineer.email}</a></span></div>
            <div>GitHub: <a href="https://github.com/${Engineer.github}">${Engineer.github}</a></div>
        </div>
    </div>
    `
}

const createIntern = (Intern) => {
    return `
    <div class="card-container>
        <div class="card-top">
            <h1>${Intern.name}</h1>
            <h2>Intern</h2>
        </div>
        <div class="card-bottom">
            <div><p>ID: ${Intern.id}</p></div>
            <div><span>Email: </span><span><a href="mailto:${Intern.email}">${Intern.email}</a></span></div>
            <div><p>School: ${Intern.school}</p></div>
        </div>
    </div>
    `
}

const assign = (employees) => {
    let arr = [];

    for(let i=0; i<employees.length; i++){
        const employee = employees[i]
        const role = employee.getRole();

        if(role == "Manager"){
            const manager = createManager(employee);
            arr.push(manager);
        } else if(role == "Engineer"){
            const engineer = createEngineer(employee);
            arr.push(engineer);
        } else {
            const intern = createIntern(employee);
            arr.push(intern);
        }
    }

    const showTeam = arr.join("");
    const teamDisplay = createPage(showTeam);

    return teamDisplay;
}

const createPage = (showTeam) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../dist/style.css">
        <title>My Team</title>
    </head>
    <body>
        <header>
            <h1>Meet My Team</h1>
        </header>
        <div id="team-container">${showTeam}</div>
    </body>
    </html>`
}

module.exports = assign;