const Employee = require ('../lib/Employee');

describe('Employee', () => {
    it('should take in a name value', () => {
        var test = new Employee("Bob", "1", "test@email.com");
        
        expect(test.name).toBe("Bob");
    });

    it('should take in an id value', () => {
        var test = new Employee("Bob", "1", "test@email.com");
        
        expect(test.id).toBe("1");
    });

    it('should take in an email value', () => {
        var test = new Employee("Bob", "1", "test@email.com");
        
        expect(test.email).toBe("test@email.com");
    });
})