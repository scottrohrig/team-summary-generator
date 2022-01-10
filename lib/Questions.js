class Questions {
    constructor() {
        // questions to make a new team page
        this.projectQuestions = [];
        // questions to make a new team member
        this.employeeQuestions = [];
    }

    askAboutProject() {
        return this.projectQuestions;
    }

    askAboutEmployee() {
        return this.employeeQuestions;
    }

    confirmCompletion() {
        return this.shouldFinish;
    }

    initializeQuestions() {
        this.projectQuestions = [
            {
                type: 'input',
                name: ''
            }
        ];

        this.employeeQuestions = [
            {
                message: 'Choose a role',
                type: 'list',
                name: 'role',
                choices: ['Manager', 'Engineer', 'Intern']
            },
            {
                message: 'Employee Name',
                type: 'input',
                name: 'name',
                valitdate(name) {
                    const regEx = /[a-zA-Z]/g;
                    if (!regEx.test(name)) {
                        return
                    }
                }
            }
        ];
    }
}


