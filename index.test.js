const sum = require('./index');

test('sum of two no.', () => {
    let c= sum(0.1, 0.2);
    expect(c).toBe(0.30000000000000004);
    expect(c).not.toBe(0.3);
    expect(c).toBeCloseTo(0.3);
    expect(c).toBeGreaterThan(0);
    expect(c).toBeLessThan(1);
    expect(c).toBeLessThanOrEqual(1);
});
test('objects are equal', () => {
    let a = { a: 1 }
    let b = a;
    expect(a).toBe(b);//toBe compares reference of two objects
});

test('objects are deep equal', () => {
    let a = { a: 1 }
    let b = {...a};
    expect(a).not.toBe(b);
    expect(a).toEqual(b);//compares values of objects/arrays
});

test('truthy and falsy values', () => {
    let a=null;
    let b=undefined;
    let c=0;
    expect(a).toBe(null);
    expect(a).toBeNull()
    expect(a).toBeDefined();
    expect(a).not.toBeUndefined();
    expect(a).not.toBeTruthy();
    expect(a).toBeFalsy()

    expect(b).toBe(undefined);
    expect(b).toBeUndefined(); 

    expect(c).toBe(0);
    expect(c).toBeDefined()
    expect(c).toBeFalsy();
    
});

test('string match', () => {
    expect('anirudh').toMatch('anirudh');
    expect('anirudh').toMatch(/i/g);

    expect('banana').toMatch(/nan/);
    expect('1234').toMatch(/\d{4}/)

    expect('anirudh').toBe('anirudh')

});

test('item in array', () => {
    
    let items=[2,4,5,6];
    expect(items).toContain(4);
    expect(new Set(items)).toContain(5);
    expect(items).not.toContain(3);
});


