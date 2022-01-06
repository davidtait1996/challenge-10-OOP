const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template.js');
const { writeFile, copyFile } = require('./utils/generate-site.js');


function Work() {
  this.employees = [];
}

Work.prototype.generateWebsite = function() {
  let htmlData = generatePage(this.employees);
  writeFile(htmlData);
  copyFile();
  console.log("HTML Created!");
}

Work.prototype.initializeWork = function () {
  inquirer
    .prompt([
      {
      type: 'text',
      name: 'name',
      message: 'What is your name?',
      validate: input => {
        if(input) {
          return true;
        } else {
          console.log("Please enter a name!");
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'id',
      message: 'What is your ID number?',
      validate: input => {
        if(input) {
          return true;
        } else {
          console.log("Please enter an ID number!");
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'email',
      message: 'What is your email?',
      validate: input => {
        if(input) {
          return true;
        } else {
          console.log("Please enter an email!");
          return false;
        }
      }
    },
    {
      type: 'text',
      name: 'office',
      message: 'What is your office number?',
      validate: input => {
        if(input) {
          return true;
        } else {
          console.log("Please enter an office number!");
          return false;
        }
      }
    }
  ])
    .then(( {name, id, email, office}) => {
      this.employees.push(new Manager(name, id, email, office));
      this.createEmployee();
    })
}

Work.prototype.createEmployee = function() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'employee',
        message: 'What type of employee are you entering?',
        choices: ['Engineer', 'Intern']
      },
      {
        type: 'text',
        name: 'name',
        message: `What is the name of your employee?`,
        validate: nameInput => {
          if(nameInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        }
      },
      {
        type: 'text',
        name: 'id',
        message: `What is the ID of your employee?`,
        validate: idInput => {
          if(idInput) {
            return true;
          } else {
            console.log("Please enter an ID!");
            return false;
          }
        }
      },
      {
        type: 'text',
        name: 'email',
        message: `What is the email of your employee?`,
        validate: emailInput => {
          if(emailInput) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        }
      }
    ])
    .then(({employee, name, id, email}) => {
      if(employee === "Engineer"){
        this.createEngineer(name,id,email);
      } else if(employee === "Intern") {
        this.createIntern(name,id,email);
      }
    })
}

Work.prototype.createEngineer = function(name,id,email) {
  inquirer
    .prompt([
      {
        type: 'text',
        name: 'github',
        message: 'What is the github of your engineer?',
        validate: input => {
          if(input) {
            return true;
          } else {
            console.log("Please enter a github username!");
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAnotherEmployee',
        message: 'Would you like to enter another employee to the system?',
        default: false
      }
    ])
    .then(({github, confirmAnotherEmployee}) => {
      this.employees.push(new Engineer(name, id, email, github));
      if(confirmAnotherEmployee){
        this.createEmployee();
      } else {
        this.generateWebsite();
      }
    })
}

Work.prototype.createIntern = function(name,id,email) {
  inquirer
    .prompt([
      {
        type: 'text',
        name: 'school',
        message: 'What school is your intern attending?',
        validate: input => {
          if(input) {
            return true;
          } else {
            console.log("Please enter a school!");
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAnotherEmployee',
        message: 'Would you like to enter another employee to the system?',
        default: false
      }
    ])
    .then(({school, confirmAnotherEmployee}) => {
      this.employees.push(new Intern(name, id, email, school));
      if(confirmAnotherEmployee){
        this.createEmployee();
      } else {
        this.generateWebsite();
      }
    })
}

new Work().initializeWork();