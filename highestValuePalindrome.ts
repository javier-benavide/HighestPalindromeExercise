/*
EXERCISE: Highest Value Palindrome

First what is a palindrome?
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

/**
 * @param {number} numberInput - A Natural number.
 * @param {number} maxChanges - Maximun changes allowed to used to make 'numberInput' the Highest Value Palindrome (Natural number).
 * @returns {number} Highest Value Palindrome or -1 if result is not a Palindrome.
 */
export function highestValuePalindrome(numberInput: number, maxChanges: number): number{
    const numberArr = Array.from(String(numberInput));

    if (numberArr.length <= maxChanges) return Number("9".repeat(numberArr.length));

    const length = numberArr.length;
    const middlePosition = Math.floor(length / 2);
    const positionsChanged: number[] = [];
    let changesDone = 0;

    // Block in charge of creating a palindrome if the given number isn't one. It ignores maxChanges.
    // It keeps track of the positions that changed.
    for (let i = 0; i < middlePosition; i++) {
        const leftNumber = Number(numberArr[i]);
        const rightNumber = Number(numberArr[length - i - 1]);
        if (leftNumber !== rightNumber) {
            const biggestNumber = Math.max(leftNumber, rightNumber);
            numberArr[i] = String(biggestNumber);
            numberArr[length - i - 1] = String(biggestNumber);
            positionsChanged.push(i);
            changesDone++;
        }
    }

    // If the amount of changes needed to make a palindrome is bigger than the maximum, return -1
    if (changesDone > maxChanges) return -1; 

    // Block in charge of increasing the palindrome to its biggest value possible (considering maxChanges).
    // If the position that it's being analyzed has been changed, then only one change is needed to make
    // both of the values a 9 (since one change has already been done). Else, and if two changes can be made,
    // two changes are done.
    let i = 0;
    while (i < middlePosition && changesDone < maxChanges) {
        if (numberArr[i] === "9") {
            i++;
            continue;
        }
        else if (i in positionsChanged) {
            numberArr[i] = "9";
            numberArr[length - i - 1] = "9";
            changesDone++;
        } else if (changesDone + 2 <= maxChanges) {
            numberArr[i] = "9";
            numberArr[length - i - 1] = "9";
            changesDone+=2;
        }
        i++;
    }

    // If changes can be made and the length of the number is odd, then the middle of the number is set to 9
    if (changesDone < maxChanges && length % 2 === 1) numberArr[middlePosition] = "9";

    return Number(numberArr.join(""));
}
