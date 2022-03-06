const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const members = [];


// Prompt members information
function addMbr() {
    inquirer.prompt([{
        message: "What is the member's Name?",
        name: "name"
    },
    {
        type: "list",
        message: "Choose the member's Role",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
        name: "mbrrole"
    },
    {
        message: "What is the member's Id?",
        name: "id"
    },
    {
        message: "What is the member's Email?",
        name: "email"
    }])
    .then(function({name, mbrrole, id, email}) {
        let roleOnly = "";
        if (mbrrole === "Engineer") {
            roleOnly = "GitHub";
        } else if (mbrrole === "Intern") {
            roleOnly = "School";
        } else {
            roleOnly = "office Number";
        }
        inquirer.prompt([{
            message: `What is the team member's ${roleOnly}?`,
            name: "roleOnly"
        },
        {
            type: "list",
            message: "Would you like to add another team member?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreMbrs"
        }])
        .then(function({roleOnly, moreMbrs}) {
            let newMbr = '';
            if (mbrrole === "Engineer") {
                newMbr = new Engineer(name, id, email, roleOnly);
            } else if (mbrrole === "Intern") {
                newMbr = new Intern(name, id, email, roleOnly);
            } else {
                newMbr = new Manager(name, id, email, roleOnly);
            }
            members.push(newMbr);
            addMbrHtml(newMbr)
            .then(function() {
                if (moreMbrs === "yes") {
                    addMbr();
                } else {
                    endHtml();
                }
            });
            
        });
    });
}

// Add new member to HTML
function addMbrHtml(member) {
    return new Promise(function(resolve, reject) {
        const mbrName = member.getName();
        const mbrRole = member.getRole();
        const mbrId = member.getId();
        const mbrEmail = member.getEmail();
        let data = "";
        if (mbrRole === "Engineer") {
            const mbrGitHub = member.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 250px">
            <h5 class="card-header text-light bg-primary">${mbrName}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${mbrId}</li>
                <li class="list-group-item">Email:<a href='mailto:${mbrEmail}'>${mbrEmail}</a></li>                
                <li class="list-group-item">GitHub:<a href='https://github.com/${mbrGitHub}'>${mbrGitHub}</a></li>
            </ul>
            </div>
        </div>`;
        } else if (mbrRole === "Intern") {
            const mbrSchool = member.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 250px">
            <h5 class="card-header text-light bg-primary">${mbrName}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${mbrId}</li>
                <li class="list-group-item">Email: ${mbrEmail}</li>
                <li class="list-group-item">School: ${mbrSchool}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const mbrPhone = member.getOfficeNbr();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 250px">
            <h5 class="card-header text-light bg-primary">${mbrName}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${mbrId}</li>
                <li class="list-group-item">Email: ${mbrEmail}</li>
                <li class="list-group-item">Office Number: ${mbrPhone}</li>
            </ul>
            </div>
        </div>`
        }
        fs.appendFile("./dist/workteam.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}

// Initialize Html File
function initHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Work Team</title>
    </head>
    <body>
        <nav class="navbar bg-danger navbar-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
        fs.writeFile("./dist/workteam.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

// End HTML file
function endHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./dist/workteam.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
}

// Start the App
function initApp() {
    initHtml();
    addMbr();
}

initApp();