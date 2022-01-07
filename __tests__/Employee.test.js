const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Sam', 1, 'sam@email.com');
    
    expect(employee.name).toBe('Sam');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('sam@email.com');
}); 

test('checks Employee name', () => {
    const employee = new Employee('Sam', 1, 'sam@email.com');

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getName()).toBe('Sam');
});

test('checks Employee id', () => {
    const employee = new Employee('Sam', 1, 'sam@email.com');

    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getId()).toBe(1);
});

test('checks Employee email', () => {
    const employee = new Employee('Sam', 1, 'sam@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
    expect(employee.getEmail()).toBe('sam@email.com');
});

test('check employee role', () => {
    const employee = new Employee('Sam', 1, 'sam@email.com');

    expect(employee.getRole()).toBe('');

    employee.role = 'Manager';

    expect(employee.getRole()).toBe('Manager');
});