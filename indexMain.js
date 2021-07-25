const inquirer = require('inquirer');
const Employee = require("../Employerdisplay/lib/Employee")
const Engineer = require("../Employerdisplay/lib/Engineer")
const Intern = require("../Employerdisplay/lib/Intern")
const Manager = require("../Employerdisplay/lib/Manager")
const fs = require('fs');
let empty = ``
function generatecard(one, two, three, four, five) {
    return card = `
    <div class="Employercard">
        <h1 class="Employername">${one}</h1>
        <h2 class="emplyeroccupation">${two}</h2>
        <p id="Idnum">${three}</p>
        <p id="Email">${four}</p>
        <p id="3rdinfo">${five}</p>
    </div>`
}

//return numberofemployees


employertype();

function employertype(response) {
    inquirer.prompt([
        {
            type: "checkbox",
            name: "thisemployee",
            message: "What type of employee is this",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ])
        .then((response) => {
            if (response.thisemployee == "Manager") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is this employers name",
                    },
                    {
                        type: "input",
                        name: "Id",
                        message: "What is this employers Id",
                    },
                    {
                        type: "input",
                        name: "Email",
                        message: "What is this employers email",
                    },
                    {
                        type: "input",
                        name: "officenumber",
                        message: "What is this employers office number",
                    }
                ]).then((response) => {
                    const manager = new Manager(response.name, response.Id, response.email, response.officeNumber);

                    const card = generatecard(manager.getName(), manager.getRole(), manager.getofficenumber(), manager.getEmail(), manager.getId())

                    empty = empty.concat(card)
                    console.log(empty)
                    return anotherone();
                })
            }

            else if (response.thisemployee == "Engineer") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is this employers name",
                    },
                    {
                        type: "input",
                        name: "Id",
                        message: "What is this employers Id",
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is this employers email",
                    },
                    {
                        type: "input",
                        name: "github",
                        message: "What is this employers github",
                    },
                ]).then((response) => {
                    const engineer = new Engineer(response.name, response.Id, response.email, response.github);

                    const card = generatecard(engineer.getName(), engineer.getRole(), engineer.getId(), engineer.getEmail(), engineer.getgithub(),)
                    empty = empty.concat(card)
                    console.log(empty)
                    return anotherone();
                })
            }

            //for intern 
            else if (response.thisemployee == "Intern") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is this employers name",
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is this employers email",
                    },
                    {
                        type: "input",
                        name: "school",
                        message: "What is this employers school",
                    },
                    {
                        type: "input",
                        name: "Id",
                        message: "What is this employers Id",
                    },
                ]).then((response) => {
                    const intern = new Intern(response.name, response.Id, response.email, response.school);

                    const card = generatecard(intern.getName(), intern.getRole(), intern.getEmail(), intern.getId(), intern.getschool())
                    empty = empty.concat(card)
                    console.log(empty)
                    return anotherone();
                })
            }
        })
}





function anotherone() {
    inquirer.prompt([
        {
            type: "checkbox",
            message: "would you like to add another employee",
            name: "anotherone",
            choices: ["yes", "no"]
        },
    ])
        .then((response) => {
            if (response.anotherone == "yes") {
                console.log('yes deteted')
                return employertype();
            }
            else {
                const fileformat = generatehtml(empty)
                fs.writeFile('index.html', fileformat, (err) => {
                    console.log('generate html running')
                    err ? console.log(err) : console.log('success')
                })
            }
        })
}


function generatehtml(empty) {
    return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Document</title>
</head>
<body>
    <header>My Team</header>
    ${empty}
    
</body>

</html>

        `
}
