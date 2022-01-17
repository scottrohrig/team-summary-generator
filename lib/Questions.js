const managerDetail = [{
    type: 'input',
    name: 'office',
    message: "Enter Manager's office number",
    default: '245',
    validate(office) {
        const regEx = /[\d]/g;
        return regEx.test(office);
    }
}];

const engineerDetail = [{
    type: 'input',
    name: 'github',
    message: "Enter Engineer's github username'",
    default: 'scottrohrig',
    validate(github) {
        const regEx = /[a-zA-Z]/g;;
        return regEx.test(github);
    }
}];

const internDetail = [{
    type: 'input',
    name: 'school',
    message: "Enter Intern's school name",
    default: 'UC Berkeley',
    validate(school) {
        const regEx = /[a-zA-Z]/g;
        return regEx.test(school);
    }
}];

const confirmContinue = [ {
    type: 'confirm',
    name: 'shouldContinue',
    message: 'Add another Employee to the team?'
} ]

const role = [{
    type: 'list',
    name: 'answer',
    choices: [ 'Manager', 'Engineer', 'Intern' ],
    message: 'Choose Employee Type'
}]

const employee = [
    {
        type: 'input',
        name: 'name',
        message: "Enter Employee's name",
        validate( name ) {
            const regEx = /[a-zA-Z]+/g;
            if ( !regEx.test( name ) ) {
                return " Enter a Valid Name";
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter Employee's email",
        validate(email) {
            const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regEx.test(email) ? true : 'Enter a valid email'
        }
    },
];
const summary = [
    {
        type: 'input',
        name: 'title',
        message: 'This Application will generate a summary page \nfor a software engineering team. A team is made up of \n3 types of employees: managers, engineers, and interns. \nFirst, enter a Team or Project title: "My Team" (default)',
    },
    {
        type: 'input',
        name: 'pageTitle',
        message: 'Enter a Page Title: "Software Engineering Team" (default)',
    },
    // {
    //     // TODO: add Project Type
    //     type: 'list',
    //     name: 'type',
    //     message: 'Project type?',
    //     choices: [ 'Web', 'App', 'UI/UX', 'Back-End', 'Full-Stack' ]
    // }
    // {
    //     // TODO: add Header Color Options 
    //     type: 'list',
    //     name: 'type',
    //     message: 'Project type?',
    //     choices: [ 'Red', 'Blue', 'Green', 'Gray', 'Black' ]
    // }
];

module.exports = {
    summary,
    employee,
    role,
    confirmContinue,
    managerDetail,
    engineerDetail,
    internDetail,
}