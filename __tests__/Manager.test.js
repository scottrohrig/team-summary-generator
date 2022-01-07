const Manager = require('../lib/Manager');

test('creates new Manager object', () => {
    const manager = new Manager('Sam', 1, 'example@email.com', 5);
    
    expect(manager.name).toBe('Sam');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('example@email.com');
    expect(manager.officeNumber).toBe(5);
});

test('checks Manager name', () => {
    const manager = new Manager('Sam', 1, 'example@email.com', 5);
    
    expect(manager.getName()).toEqual(expect.any(String));
    expect(manager.getName()).toBe('Sam');
});

test('checks Manager id', () => {
    const manager = new Manager('Sam', 1, 'example@email.com', 5);
    
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getId()).toBe(1);
});

test('checks Manager email', () => {
    const manager = new Manager('Sam', 1, 'example@email.com', 5);
    
    expect(manager.getEmail()).toEqual(expect.stringContaining('@'));
    expect(manager.getEmail()).toBe('example@email.com');
});

test('check manager role', () => {
    const manager = new Manager('Sam', 1, 'example@email.com', 5);

    expect(manager.getRole()).toBe('Manager');
});