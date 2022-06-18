const divide = (divisor) => (message) => (number) => {
    return number % divisor === 0 ? message : '';
};

/**
 *
 * @type {function(*): function(*): *|string}
 */
const divisibleByThree = divide(3);
const fizz = divisibleByThree('Fizz');

/**
 *
 * @type {function(*): function(*): *|string}
 */
const divisibleByFive = divide(5);
const buzz = divisibleByFive('Buzz');

/**
 *
 * @type {function(*): function(*): *|string}
 */
const divisibleBySeven = divide(7);
const foo = divisibleBySeven('Foo');

/**
 *
 * @param operations
 * @returns {function(*): string|string}
 */
const compute = (...operations) => (number) => {
    let result = '';
    for (const op of operations) {
        result += op(number);
    }
    return Boolean(result) ? result : String(number);
};

/**
 *
 */
export default compute(
    fizz,
    buzz,
    foo
);