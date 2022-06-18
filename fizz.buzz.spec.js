import compute from './fizz.buzz';

describe('fizzBuzz Algo', () => {

    it.each`
        number | expected
        ${2}   | ${'2'}
        ${3}   | ${'Fizz'}
        ${4}   | ${'4'}
        ${5}   | ${'Buzz'}
        ${6}   | ${'Fizz'}
        ${7}   | ${'Foo'}
        ${8}   | ${'8'}
        ${9}   | ${'Fizz'}
        ${10}  | ${'Buzz'}
        ${15}  | ${'FizzBuzz'}
        ${105} | ${'FizzBuzzFoo'}
        `('should return $expected when compute with $number', ({number, expected}) => {
        const actual = compute(number);
        expect(actual).toBe(expected);
    });
});