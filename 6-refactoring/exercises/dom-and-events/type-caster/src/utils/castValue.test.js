import castValue from './castValue.js';

describe('typeCaster: converts values to string, number or boolean', () => {
    describe('correctly casts valid types', () => {
        it('number -> string', () => {
            const expected = '34';
            const actual = castValue(34, 'string');
            expect(actual).toEqual(expected);
        });
        it('string -> string', () => {
            const expected = 'asdf';
            const actual = castValue('asdf', 'string');
            expect(actual).toEqual(expected);
        });
        it('number -> number', () => {
            const expected = 3;
            const actual = castValue(3, 'number');
            expect(actual).toEqual(expected);
        });
        it('string -> number', () => {
            const expected = 45;
            const actual = castValue('45', 'number');
            expect(actual).toEqual(expected);
        });
        it('boolean -> number', () => {
            const expected = 1;
            const actual = castValue(true, 'number');
            expect(actual).toEqual(expected);
        });
        it('undefined -> number', () => {
            const expected = NaN;
            const actual = castValue(undefined, 'number');
            expect(actual).toEqual(expected);
        });
        it('undefined -> boolean', () => {
            const expected = false;
            const actual = castValue(undefined, 'boolean');
            expect(actual).toEqual(expected);
        });
        it('number (1) -> boolean', () => {
            const expected = true;
            const actual = castValue(1, 'boolean');
            expect(actual).toEqual(expected);
        });
        it('number (0) -> boolean', () => {
            const expected = false;
            const actual = castValue(0, 'boolean');
            expect(actual).toEqual(expected);
        });
        it('string (" ") -> boolean', () => {
            const expected = true;
            const actual = castValue(' ', 'boolean');
            expect(actual).toEqual(expected);
        });
        it('string ("") -> boolean', () => {
            const expected = false;
            const actual = castValue('', 'boolean');
            expect(actual).toEqual(expected);
        });
    });
    describe('all invalid types return undefined', () => {
        it('no type', () => {
            const expected = undefined;
            const actual = castValue(12);
            expect(actual).toEqual(expected);
        });
        it('a number instead of a type string', () => {
            const expected = undefined;
            const actual = castValue(12, 4);
            expect(actual).toEqual(expected);
        });
        it('"object"', () => {
            const expected = undefined;
            const actual = castValue(12, 'object');
            expect(actual).toEqual(expected);
        });
    });
});
