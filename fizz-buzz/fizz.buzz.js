/**
 * 
 * @param divisor
 * @returns {function(*): function(*): *|string}
 */
const divisibleBy = (divisor) => (message) => (number) => {
    return number % divisor === 0 ? message : '';
};

/**
 *
 * @type {function(*): *|string}
 */
const fizz = divisibleBy(3)('Fizz');

/**
 *
 * @type {function(*): *|string}
 */
const buzz = divisibleBy(5)('Buzz');

/**
 *
 * @type {function(*): *|string}
 */
const foo = divisibleBy(7)('Foo');

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
