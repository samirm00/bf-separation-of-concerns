/**
 * @jest-environment jsdom
 */

import updateOutput from './updateOutput.js';

describe('reverseAndUpper: reverses a string and upper-cases all the letters', () => {
    describe('test with div', () => {
        const element = document.createElement('div');
        const actual = updateOutput(element, 'Hello');

        it('nodeName -> DIV', () => {
            expect(actual.nodeName).toEqual('DIV');
        });
        it(' innerHTML -> Hello', () => {
            expect(actual.innerHTML).toEqual('Hello');
        });
    });

    describe('test with h2', () => {
        const element = document.createElement('h2');
        const actual = updateOutput(element, 'Hello');

        it('nodeName -> H2', () => {
            expect(actual.nodeName).toEqual('H2');
        });
        it(' innerHTML -> Hello', () => {
            expect(actual.innerHTML).toEqual('Hello');
        });
    });
});
