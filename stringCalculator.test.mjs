import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { stringCalculator } from './stringCalculator.mjs';

describe('stringCalculator', () => {
  it('should return zero on empty string', () => {
    assert.equal(stringCalculator(''), 0);
  });

  it('should return number on number', () => {
    assert.equal(stringCalculator('1'), 1);
  });

  it('should return sum on two number', () => {
    assert.equal(stringCalculator('10,20'), 30);
  });

  it('should return sum on n number', () => {
    assert.equal(stringCalculator('1,2,3'), 6);
  });

  it('should accept \\n delimiter', () => {
    assert.equal(stringCalculator('1\n2,3'), 6);
  });

  it('should accept custom delimiter', () => {
    assert.equal(stringCalculator('//;\n4;5;6'), 15);
  });

  it('should accept special character or regex custom delimiter', () => {
    assert.equal(stringCalculator('//.\n10.5.6'), 21);
  });

  it('should throw exception when pass negative number', () => {
    assert.throws(() => stringCalculator('4,-5,-6'), {
      message: 'negatives not allowed: -5,-6',
    });
  });

  it('should ignore number bigger than 1000', () => {
    assert.equal(stringCalculator('1001,6,1000'), 1006);
  });

  it('should accept any custom delimiter length', () => {
    assert.equal(stringCalculator('//[***]\n6***10***4'), 20);
  });

  it('should accept multiple custom delimiter', () => {
    assert.equal(stringCalculator('//[+][%]\n2+4%6'), 12);
  });

  it('should accept multiple custom delimiter with length longer then one char', () => {
    assert.equal(stringCalculator('//[++][%%]\n23++7%%10'), 40);
  });
});
