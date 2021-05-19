const inquirer = require('inquirer');
const Employee = require("../Employerdisplay/lib/Employee")
const fs = require('fs');
const empty = []
  function generatecard(info1,info2,info3){
    return card = `
    <div class="Employercard">
        <h1 class="Employername"></h1>
        <h2 class="emplyeroccupation"></h2>
        <p id="Idnum">${info1}</p>
        <p id="Email">${info2}</p>
        <p id="3rdinfo">${info3}</p>
    </div>` 
}
employertype();
  
 function askhowmany(response){
    inquirer.prompt([
        {
            type: "number",
            name:"numberofemployees",
            message:"how many employees are on your team",
        },
    ]).then((response) => {
{
        employertype(response)
    }})
//return numberofemployees
}



    function employertype(){
        inquirer.prompt([
            {
                type:"checkbox",
                name:"thisemployee",
                message:"What type of employee is this",
                choices:["Manager","Engineer","Intern"]
            }
        ])
        .then((response)=>{
        {console.log(response.thisemployee)
        }
    });
}