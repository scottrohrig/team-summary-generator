const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Sam', 1, 'sam@email.com');

    expect(employee.name).toBe('Sam');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('sam@email.com');
}); 