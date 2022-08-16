const Manager = require ('../lib/Manager');

describe('Manager', () => {
    it('should take in an office number value', () => {
        var test = new Manager("Sara", "4", "test@email.com", "1403");
        
        expect(test.officeNumber).toBe("1403");
    })
})