const Engineer = require('../lib/Engineer');

test('creates new Engineer object', () => {
    const engineer = new Engineer('Sam', 1, 'example@email.com', 'samcodes');
    
    expect(engineer.name).toBe('Sam');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('example@email.com');
    expect(engineer.github).toBe('samcodes');
});

test('checks Engineer name', () => {
    const engineer = new Engineer('Sam', 1, 'example@email.com', 'samcodes');
    
    expect(engineer.getName()).toEqual(expect.any(String));
    expect(engineer.getName()).toBe('Sam');
});

test('checks Engineer id', () => {
    const engineer = new Engineer('Sam', 1, 'example@email.com', 'samcodes');
    
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getId()).toBe(1);
});

test('checks Engineer email', () => {
    const engineer = new Engineer('Sam', 1, 'example@email.com', 'samcodes');
    
    expect(engineer.getEmail()).toEqual(expect.stringContaining('@'));
    expect(engineer.getEmail()).toBe('example@email.com');
});

test('check Engineer role', () => {
    const engineer = new Engineer('Sam', 1, 'example@email.com', 'samcodes');
    
    expect(engineer.getRole()).toBe('Engineer');
});

test('check Engineer github', () => {
    const engineer = new Engineer('Sam', 1, 'example@email.com', 'samcodes');

    expect(engineer.getGithub()).toBe('samcodes');
});