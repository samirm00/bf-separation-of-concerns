import filterFood from './filterFood.js';

describe('search: searches an array of strings and returns formatted results', () => {
    describe('search: correctly finds and formats search results', () => {
        it('an empty array returns an empty string', () => {
            const expected = '';
            const actual = filterFood([], 'chair');
            expect(actual).toEqual(expected);
        });
        it('an empty query returns an empty string', () => {
            const expected = '';
            const actual = filterFood(['a', 's', 'd', 'f'], '');
            expect(actual).toEqual(expected);
        });
        it('returns all entries if they all match', () => {
            const expected = '\n- egg\n- pie\n- peanut';
            const actual = filterFood(['egg', 'pie', 'peanut'], 'e');
            expect(actual).toEqual(expected);
        });
        it('returns no entries if none match', () => {
            const expected = '';
            const actual = filterFood(['egg', 'pie', 'peanut'], 'x');
            expect(actual).toEqual(expected);
        });
        it('returns only matching entries', () => {
            const expected = '\n- peanut\n- pie';
            const actual = filterFood(
                ['toast', 'peanut', 'egg', 'pie', 'milk'],
                'p',
            );
            expect(actual).toEqual(expected);
        });
    });
    describe('filterFood: uses arguments correctly', () => {
        it('does not modify the array argument', () => {
            const arg = ['a', 's', 'd', 'f'];
            filterFood(arg);
            expect(arg).toEqual(['a', 's', 'd', 'f']);
        });
    });
});
