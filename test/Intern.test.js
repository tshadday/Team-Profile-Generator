const Intern = require ('../lib/Intern');

describe('Intern', () => {
    it('should take in a school value', () => {
        var test = new Intern("Mark", "3", "test@email.com", "School");
        
        expect(test.school).toBe("School");
    })
})