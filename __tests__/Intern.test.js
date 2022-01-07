const Intern = require('../lib/Intern');

test('creates new Intern object', () => {
    const intern = new Intern('Sam', 1, 'example@email.com', 'Berkeley');

    expect(intern.name).toBe('Sam');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('example@email.com');
    expect(intern.school).toBe('Berkeley');
});

test('checks Intern name', () => {
    const intern = new Intern('Sam', 1, 'example@email.com', 'Berkeley');
    
    expect(intern.getName()).toEqual(expect.any(String));
    expect(intern.getName()).toBe('Sam');
});

test('checks Intern id', () => {
    const intern = new Intern('Sam', 1, 'example@email.com', 'Berkeley');
    
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getId()).toBe(1);
});

test('checks Intern email', () => {
    const intern = new Intern('Sam', 1, 'example@email.com', 'Berkeley');
    
    expect(intern.getEmail()).toEqual(expect.stringContaining('@'));
    expect(intern.getEmail()).toBe('example@email.com');
});

test('check Intern role', () => {
    const intern = new Intern('Sam', 1, 'example@email.com', 'Berkeley');
    
    expect(intern.getRole()).toBe('Intern');
});

test('check Intern school', () => {
    const intern = new Intern('Sam', 1, 'example@email.com', 'Berkeley');

    expect(intern.getSchool()).toBe('Berkeley');
});