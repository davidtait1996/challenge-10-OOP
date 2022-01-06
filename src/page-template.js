const generateEmployees = employeesArr => {
  return `
    <div class="d-flex flex-row justify-content-center p-3">
      ${employeesArr
        .map(({ name, id, email, role, school, github, office}) => {
            let extra = "";
            if(role === "Manager"){
              extra = "Office number: " + office;
            } else if (role === "Engineer") {
              extra =  `<a href = "https://www.github.com/${github}">Github</a></li>`;
            } else {
              extra = "School: " + school;
            }
            return `
            <div class="card">
            <div class="card-header text-center">
              ${role}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-center">${name}</li>
              <li class="list-group-item text-center">ID: ${id}</li>
              <li class="list-group-item text-center"><a href = "mailto: ${email}">Send Email</a></li>
              <li class="list-group-item text-center">${extra}</li>
            </ul>
          </div>
          `;
          })
        .join('')}
      </div>
  `;
};

const generatePage = (employeesArr) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
      <link rel="stylesheet" href="./style.css" />
      <title>Employees</title>
    </head>
  
    <body>
      <header class="row">
        <h1 class="text-center w-100 text-light bg-primary">Employees</h1>
      </header>

      
    <main>
      ${generateEmployees(employeesArr)}
    </main>

  </body>
  </html>
  `;
};

module.exports = generatePage;