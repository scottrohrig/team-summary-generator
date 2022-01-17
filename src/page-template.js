// page-template.js
// module generates the main HTML, the HTML for each employee card, and the different HTML based on the employee role

/**
 * returns the card title & icon h3 element given a specified role ('Manager', 'Engineer', 'Intern')
 * @param {String} role 
 * @returns 
 */
const generateRole = function ( role ) {
    let template = ``;
    switch ( role ) {
        case 'Manager':
            template = `<h3 class="card-title"><i class="fa fa-mug-hot me-2"></i>${ role }</h3>`;
            break;
        case 'Engineer':
            template = `<h3 class="card-title"><i class="fa fa-glasses me-2"></i>${ role }</h3>`;
            break;
        case 'Intern':
            template = `<h3 class="card-title"><i class="fa fa-user-graduate me-2"></i>${ role }</h3>`;
            break;
        default:
            break;
    }
    return template;
}

/**
 * returns a template string li element given a specified employee type ('Manager', 'Engineer', etc.)
 * @param {Employee} employee 
 * @returns 
 */
const generateDetail = function ( employee ) {
    let template = ``;
    switch ( employee.getRole() ) {
        case 'Manager':
            template = `<li class="list-group-item">Office number: ${ employee.officeNumber }</li>`;
            break;
        case 'Engineer':
            template = `<li class="list-group-item">GitHub: <a href="https://github.com/${ employee.getGithub() }/" target="_blank">${ employee.getGithub() }</a></li>`;
            break;
        case 'Intern':
            template = `<li class="list-group-item">School: ${ employee.getSchool() }</li>`;
            break;
        default:
            break;
    }
    return template;
}

/**
 * returns a string of HTML cards given an array of Employee objects
 * @param {Array<Employee>} employees 
 * @returns 
 */
function generateTeam( employees ) {

    return employees.map( ( employee ) => {
        return `
                <div class="card shadow-sm col-10 col-sm-5 col-lg-3 m-2 p-0">
                    <div class="card-header bg-primary text-white">
                        <h2 class="card-title">${ employee.getName() }</h2>
                        ${ generateRole( employee.getRole() ) }
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${ employee.getId() }</li>
                            <li class="list-group-item">Email: <a href="mailto:${ employee.getEmail() }">${ employee.getEmail() }</a></li>
                            ${ generateDetail( employee ) }
                        </ul>
                    </div>
                </div>`;
    } ).join( '' );

}

/**
 * returns the main summary page HTML as a string, given the team information `{title:'', employees: []}`
 * @param {Object} teamInfo 
 * @returns 
 */
function generateHTML( teamInfo ) {

    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${ teamInfo.pageTitle }</title>
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <main class="bg-light">
        <header class="container-fluid bg-danger text-white">
            <div class="row">
                <div class="col jumbotron mb-3 p-5">
                    <h1 class="text-center">${ teamInfo.title }</h1>
                </div>
            </div>
        </header>
        <section class='container-md'>
            <div class="row card-deck justify-content-center p-5">
                ${ generateTeam( teamInfo.employees ) }
            </div>
        </section>
    </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/js/bootstrap.min.js"></script>
</body>

</html>
`
}

module.exports = {
    generateRole,
    generateDetail,
    generateTeam,
    generateHTML,
}