const divideBy = (divisor) => (message) => (number) => {
    return number % divisor === 0 ? message : '';
};

/**
 *
 * 
 */
const fizz = divideBy(3)('Fizz');

/**
 *
 * 
 */
const buzz = divideBy(5)('Buzz');

/**
 *
 *
 */
const foo = divideBy(7)('Foo');

/**
 *
 * @param operations
 * @returns {function(*): string|string}
 */
const fizzBuzzEngine = (...operations) => (number) => {
    let result = '';
    for (const op of operations) {
        result += op(number);
    }
    return Boolean(result) ? result : String(number);
};

/**
 *
 */
export default fizzBuzzEngine(
    fizz,
    buzz,
    foo
);
