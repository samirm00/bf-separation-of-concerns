import countLength from './countLength.js';

describe('calculate the length of a string', () => {
    test('"hello" -> "5"', () => {
        expect(countLength('hello')).toBe('5');
    });
});
