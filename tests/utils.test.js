import { getRandomNumber } from '../src/utils.js';

test('should generate random number between 1 and 6', () => {
    const number = getRandomNumber(1, 6);
    expect(number).toBeGreaterThanOrEqual(1);
    expect(number).toBeLessThanOrEqual(6);
});
