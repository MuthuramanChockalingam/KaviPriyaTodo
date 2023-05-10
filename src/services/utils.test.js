import add from './utils';

describe('utils', () => {
    test('To test add method with addition of numbers', () => {
        const inputOne = 3;
        const inputTwo = 7;
        const expectedResult = inputOne + inputTwo;
        const result = add(inputOne, inputTwo);

        expect(result).toEqual(expectedResult);
    });

    test('To test add method with addition of string', () => {
        const inputOne = 'a';
        const inputTwo = 'b';
        const expectedResult = inputOne + inputTwo;
        const result = add(inputOne, inputTwo);

        expect(result).toEqual(expectedResult);
    });
});
