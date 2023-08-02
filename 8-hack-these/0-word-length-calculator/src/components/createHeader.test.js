/**
 * @jest-environment jsdom
 */

import createHeader from './createHeader.js';

describe('calculate the length of a string', () => {
    const header = createHeader('5');
    test('nodeName  -> H1', () => {
        expect(header.nodeName).toEqual('H1');
    });

    test('innerHTML -> 5', () => {
        expect(header.innerHTML).toEqual('5');
    });
});
