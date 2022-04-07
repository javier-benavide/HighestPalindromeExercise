/*
EXERCISE: Highest Value Palindrome

First what is a palindorme?
Palindromes are texts that read the same from the left or right, for example madam or 0110.

Exercise description:

You will be given as input a number and a maximum number of changes you can make.
Where each change is applied only to one character.
You cannot nethier add or remove characters, so the number length must remain exactly the same.

You must create the largest palindromic number possible or
return -1 if it is not possible to create a palindrome under the contstraints.

You must know that when you run the testing (yarn test), the first 3 test
shows the input and the expected result. The other test have hidden values
that you will never know until the end of the interview.
*/

const equals = (a: any[], b: any[]) => JSON.stringify(a) === JSON.stringify(b);
const getMiddleIndex = (arr: any[]) => (arr.length / 2) | 0;

const getLargestPalindrome = (
    palindrome: string[],
    remainingChanges: number
) => {
    if (remainingChanges > 1) {
        const nextToChange = palindrome.findIndex((i) => +i < 9);
        const lastToChange = palindrome.lastIndexOf(palindrome[nextToChange]);

        palindrome[nextToChange] = "9";
        palindrome[lastToChange] = "9";

        remainingChanges -= 2;
        if (remainingChanges) {
            return getLargestPalindrome(palindrome, remainingChanges);
        }
    } else {
        palindrome[getMiddleIndex(palindrome)] = "9";
        remainingChanges--;
    }
    return palindrome;
};

const isKPalindrome = (value: number, remainingChanges: number) => {
    const numbers = value.toString().split("");
    const mirror = [...numbers].reverse();
    let isPalindrome = false;

    for (let i = 0; i < numbers.length / 2; i++) {
        const j = +numbers[i];
        const k = +mirror[i];

        if (remainingChanges && j !== k) {
            const largest = Math.max(j, k).toString();
            numbers[i] = largest;
            mirror[i] = largest;
            remainingChanges--;
        }

        isPalindrome = equals(numbers, [...numbers].reverse());
    }

    if (isPalindrome && remainingChanges) {
        return getLargestPalindrome(numbers, remainingChanges);
    }

    return -1;
};

/**
 * @param {number}  numberInput - A Natural number.
 * @param {number} maxChanges - Maximun changes allowed to used to make 'numberInput' the Highest Value Palindrome (Natural number).
 * @returns {number} Highest Value Palindrome or -1 if result is not a Palindrome
 */
export function highestValuePalindrome(numberInput: number, maxChanges: number): number {
    //Write your code here
    console.log(isKPalindrome(1231, 3));
    return -1;
}

console.log(isKPalindrome(1231, 3));
