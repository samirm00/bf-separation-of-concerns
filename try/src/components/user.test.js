/**
 * @jest-environment jsdom
 */

import createUser from './user.js';

describe('create a user component ', () => {
    test('name -> John', () => {
        const user = createUser('John');
        expect(user.nodeName).toEqual('H2');
        expect(user.innerText).toEqual('John');
    });
});
