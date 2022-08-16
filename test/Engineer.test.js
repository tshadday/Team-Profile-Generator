const Engineer = require ('../lib/Engineer');

describe('Engineer', () => {
    it('should take in a github value', () => {
        var test = new Engineer("Tim", "2", "test@email.com", "TimRepo");
        
        expect(test.github).toBe("TimRepo");
    })
})