export function stringCalculator(text) {
  const { separators, stringNumbers } = extractSeparatorsAndNumbers(text);
  const numbers = stringNumbers.split(separators).map((n) => Number(n));

  const MIN_LIMIT = 0;
  const MAX_LIMIT = 1000;
  const negativeNumbers = numbers.filter((n) => n < MIN_LIMIT);

  if (negativeNumbers.length > 0) {
    throw new Error(`negatives not allowed: ${negativeNumbers.join(',')}`);
  }

  return numbers
    .filter((n) => n <= MAX_LIMIT)
    .reduce((acc, curr) => acc + curr, 0);
}

/**
 *
 * @param {*} text
 * @returns
 */
function extractSeparatorsAndNumbers(text) {
  const startWithCustomPatternSeparator =
    text.length > 1 && text[0] === '/' && text[1];

  /**
   * default separator
   */
  if (!startWithCustomPatternSeparator) {
    return {
      stringNumbers: text,
      separators: new RegExp('\n|,'),
    };
  }

  /**
   * custom separator
   */
  let cursorIndex = 2;
  let currentChar = text[cursorIndex];
  const startWithMultipleSeparatorPattern = currentChar === '[';

  //single custom separator
  if (!startWithMultipleSeparatorPattern) {
    return {
      stringNumbers: text.substring(4),
      separators: new RegExp(`\\${currentChar}`),
    };
  }

  //multiple separator
  let currentSeparator = '';
  const separators = [];
  do {
    switch (currentChar) {
      case '[':
        break;
      case ']':
        separators.push(currentSeparator);
        currentSeparator = '';
        break;
      default:
        currentSeparator += '\\' + currentChar;
    }
    cursorIndex++;
    currentChar = text[cursorIndex];
  } while (text[cursorIndex] !== '\n');

  return {
    stringNumbers: text.substring(++cursorIndex),
    separators: new RegExp(separators.join('|')),
  };
}
