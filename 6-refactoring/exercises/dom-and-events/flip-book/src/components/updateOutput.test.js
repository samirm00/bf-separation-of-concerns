import updateOutput from './updateOutput.js';

describe('reverseAndUpper: reverses a string and upper-cases all the letters', () => {
    const element = document.createElement('div');
    it('"lower-case letters"', () => {
        const actual = updateOutput(element, 'Hello');
        expect(actual.i).toEqual(expected);
    });
    it('upper-case letters', () => {
        expect(actual).toEqual(expected);
    });
});
