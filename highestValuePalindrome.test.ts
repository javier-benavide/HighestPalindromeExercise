import { highestValuePalindrome } from "./highestValuePalindrome";

test('Test 1: (1231, 3) -> 9339', () => {
    const result = highestValuePalindrome(1231,3);
    expect(result).toBe(9339);
})

test('Test 2: (12321, 1) -> 12921', () => {
    const result = highestValuePalindrome(12321,1);
    expect(result).toBe(12921);
})

test('Test 3: (467, 1) -> -1', () => {
    const result = highestValuePalindrome(467,1);
    expect(result).toBe(-1);
})
