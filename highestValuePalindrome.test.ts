import { highestValuePalindrome } from "./highestValuePalindrome";

test('Test 1: (1231, 3) -> 9339', () => {
    const result = highestValuePalindrome(1231,3);
    expect(result).toBe(9339);
})

test('Test 2: (12321, 3) -> 92929', () => {
    const result = highestValuePalindrome(12321,3);
    expect(result).toBe(92929);
})

test('Test 3: (467, 0) -> -1', () => {
    const result = highestValuePalindrome(467,0);
    expect(result).toBe(-1);
})

test('Hidden Test 1', () => {
    const result = highestValuePalindrome(12345,5);
    try{
        expect(result).toBe(99999);
    } catch(e) {
        //
        //
        throw new Error('Hidden Test 1 failed')
    }
})

test('Hidden Test 2', () => {
    const result = highestValuePalindrome(12345,4);
    try{
        expect(result).toBe(99399);
    } catch(e) {
        //
        //
        throw new Error('Hidden Test 2 failed')
    }
})

test('Hidden Test 3', () => {
    const result = highestValuePalindrome(12345,3);
    try{
        expect(result).toBe(94349);
    } catch(e) {
        //
        //
        throw new Error('Hidden Test 3 failed')
    }
})

test('Hidden Test 4', () => {
    const result = highestValuePalindrome(12345,2);
    try{
        expect(result).toBe(54345);
    } catch(e) {
        //
        //
        throw new Error('Hidden Test 4 failed')
    }
})

test('Hidden Test 5', () => {
    const result = highestValuePalindrome(1122,1);
    try{
        expect(result).toBe(-1);
    } catch(e) {
        //
        //
        throw new Error('Hidden Test 5 failed')
    }
})

test('Hidden Test 6', () => {
    const result = highestValuePalindrome(95231,2);
    try{
        expect(result).toBe(95259);
    } catch(e) {
        //
        //
        throw new Error('Hidden Test 6 failed')
    }
})

test('Hidden Test 7', () => {
    const result = highestValuePalindrome(93231,2);
    try{
        expect(result).toBe(93939);
    } catch(e) {
        //
        //
        throw new Error('Hidden Test 7 failed')
    }
})

test('Hidden Test 8', () => {
    const result = highestValuePalindrome(93239,2);
    try{
        expect(result).toBe(99299);
    } catch(e) {
        //
        //
        throw new Error('Hidden Test 8 failed')
    }
})

test('Hidden Test 9', () => {
    const result = highestValuePalindrome(123456789,8);
    try{
        expect(result).toBe(999999999);
    } catch(e) {
        //
        //
        throw new Error('Hidden Test 9 failed')
    }
})

test('Hidden Test 10', () => {
    const result = highestValuePalindrome(123456780,9);
    try{
        expect(result).toBe(999999999);
    } catch(e) {
        //
        //
        throw new Error('Hidden Test 10 failed')
    }
})

test('Hidden Test 11', () => {
    const result = highestValuePalindrome(123456780,25);
    try{
        expect(result).toBe(999999999);
    } catch(e) {
        //
        //
        throw new Error('Hidden Test 11 failed')
    }
})