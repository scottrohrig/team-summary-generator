const inquirer = require('inquirer');
const Manager = require( './lib/Manager' );
const Engineer = require( './lib/Engineer' );
const Intern = require( './lib/Intern' );
const writeFile = require( './src/generate-file' );
const { generateHTML } = require( './src/page-template' );

class App {
    constructor() {
        this.title;
        this.pageTitle;
        this.employees = [ new Manager( 'Micah', 1, 'micah@email.com', 245 ) ];
        this.currentEmployee;
        this.html;
    }

    /** prompts user for team member info 
     * then asks to continue.
    */
    addEmployee() {
        inquirer
            .prompt( [
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
                }
            ] )
            .then( answers => {
                // make Employee object
                console.dir( answers )

                // push to this.employees

                // shouldContinue?
                this.confirmEmployees()
            } )
    }

    /** prompts user for project info, then
     * starts asking about individual team members
     */
    createProjectSummary() {

        inquirer
            .prompt( [
                {
                    type: 'input',
                    name: 'title',
                    message: 'Enter a Team or Project title: "My Team" (default)',
                    // validate( title ) {
                    //     if ( !title ) return 'Type a title'
                    //     return true;
                    // }
                },
                {
                    type: 'list',
                    name: 'type',
                    message: 'Project type?',
                    choices: [ 'Web', 'App', 'UI/UX', 'Back-End', 'Full-Stack' ]
                }
            ] )
            .then( res => {
                this.title = !res.title ? 'My Team' : res.title;
                // prompts user for team info, then
                // prompts user for team info, then
                // console.dir(this)
                // call method to get team info
                this.addEmployee()
            }
            )
    }

    /** confirms user is finished adding team members, generates html
     */
    confirmEmployees() {
        inquirer.prompt( [ {
            type: 'confirm',
            name: 'shouldContinue',
            message: 'Add another Employee to the team?'
        } ] ).then( ( { shouldContinue } ) => {
            if ( shouldContinue ) {
                this.addEmployee();
            } else {
                writeFile( generateHTML( this ) );
            }
        } )
    }

    /** launches app */
    init() {
        this.createProjectSummary();
    }
}

new App().init();