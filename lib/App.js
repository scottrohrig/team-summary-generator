const inquirer = require('inquirer');
const Manager = require( './Manager' );
const Engineer = require( './Engineer' );
const Intern = require( './Intern' );
const { writeFile, copyFile } = require( '../src/generate-file' );
const { generateHTML } = require( '../src/page-template' );
const questions = require( './Questions' );

class App {
    constructor() {
        this.title;
        this.pageTitle;
        this.employees = [];
    }

    /** prompts user for team member info 
     * then asks to continue.
    */
    async addEmployee( role ) {

        if ( role === 'Manager' ) {
            const managerData = await inquirer.prompt( [ ...questions.employee, ...questions.managerDetail ] );
            const { name, email, office } = managerData;
            const manager = new Manager( name, this.employees.length + 1, email, office );
            this.employees.push( manager );
        } else if ( role === 'Intern' ) {
            const internData = await inquirer.prompt( [ ...questions.employee, ...questions.internDetail ] );
            const { name, email, school } = internData;
            const intern = new Intern( name, this.employees.length + 1, email, school );
            this.employees.push( intern );
        } else {
            const engineerData = await inquirer.prompt( [ ...questions.employee, ...questions.engineerDetail ] );
            const { name, email, github } = engineerData;
            const engineer = new Engineer( name, this.employees.length + 1, email, github );
            this.employees.push( engineer );
        }

        this.confirmEmployees();

    }

    /** prompts user for project info, then
     * starts asking about individual team members
     */
    async createProjectSummary() {

        let summary = await inquirer.prompt( questions.summary )
        this.title = !summary.title ? 'My Team' : summary.title;
        this.pageTitle = !summary.pageTitle ? 'Software Engineering Team' : summary.pageTitle;

        this.getEmployeeType();

    }

    getEmployeeType() {
        inquirer.prompt( questions.role ).then( ( { answer } ) => {
            this.addEmployee( answer );
        } )
    }
    
    /** confirms user is finished adding team members, generates html
     */
    confirmEmployees() {
        inquirer.prompt( questions.confirmContinue ).then( ( { shouldContinue } ) => {
            if ( shouldContinue ) {
                this.getEmployeeType();
            } else {
                console.log( this );
                writeFile( generateHTML( this ) );
                copyFile('./src/style.css','./dist/style.css')
            }
        } )
    }

    /** launches app */
    init() {
        this.createProjectSummary();
    }
}

module.exports = App;