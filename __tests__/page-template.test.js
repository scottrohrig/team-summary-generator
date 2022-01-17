// import generateRole from '../src/page-template';
const { generateRole, generateDetail, generateTeam, generateHTML } = require( '../src/page-template' );
const Manager = require( '../lib/Manager' );

const manager = new Manager( 'Sam', 1, 'sam@email.com', 245 )

const teamInfo = {
    title: 'My Team',
    employees: [
        manager
    ]
}

test( 'generates HTML role title by role', () => {
    const role = generateRole( manager.getRole() );

    expect( role ).toBe( '<h3 class="card-title"><i class="fa fa-mug-hot mr-2"></i>Manager</h3>' )
} );

test( 'generates HTML detail by role', () => {
    const detail = generateDetail( manager );

    expect( detail ).toBe( '<li class="list-group-item">Office number: 245</li>' )
} );

test( 'generates team cards given members', () => {
    const team = generateTeam( teamInfo.employees );
    console.log( team )

    expect( team ).toBe( `
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">Sam</h2>
                    <h3 class="card-title"><i class="fa fa-mug-hot mr-2"></i>Manager</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: 1</li>
                        <li class="list-group-item">Email: <a href="mailto:sam@email.com">sam@email.com</a></li>
                        <li class="list-group-item">Office number: 245</li>
                    </ul>
                </div>
            </div>` )
} );

test( 'generates main page html', () => {
    const page = generateHTML( teamInfo );
    // jest and string templates are fickle. It requires \n\t*3 on line 70 after <section class='container'>

    expect( page ).toBe( `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Software Engineering Team</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/js/bootstrap.min.js"></script>
</head>
<body>
    <main>
        <header>
            <h1>
                My Team
            </h1>
        </header>
        <section class='container'>
            
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">Sam</h2>
                    <h3 class="card-title"><i class="fa fa-mug-hot mr-2"></i>Manager</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: 1</li>
                        <li class="list-group-item">Email: <a href="mailto:sam@email.com">sam@email.com</a></li>
                        <li class="list-group-item">Office number: 245</li>
                    </ul>
                </div>
            </div>
        </section>
    </main>

</body>
</html>
`)
} );

