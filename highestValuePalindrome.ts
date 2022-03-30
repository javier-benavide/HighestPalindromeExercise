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

/**
 * @param {number}  numberInput - A Natural number.
 * @param {number} maxChanges - Maximun changes allowed to used to make 'numberInput' the Highest Value Palindrome (Natural number).
 * @returns {number} Highest Value Palindrome or -1 if result is not a Palindrome
 */
export function highestValuePalindrome(numberInput: number, maxChanges: number): number | Array<number>{
    const numbers: Array<number> = Array.from(String(numberInput), Number);
    const badPositionsIndex: Array<number> = numbers
        .slice(0, (numbers.length / 2))
        .reduce( (cur, n1, i) => (n1 !== numbers[numbers.length - 1 - i]) ? [...cur, i] : cur, [])
    
    if(badPositionsIndex.length <= maxChanges) {
        let leftActions = maxChanges - badPositionsIndex.length;

        badPositionsIndex.forEach((i) => {
            numbers[numbers.length - 1 - i] = numbers[i] = Math.max(numbers[numbers.length - 1 - i], numbers[i]);
        });

        numbers
            .slice(0, numbers.length/2)
            .forEach( (n, i) => {
                if(n !== 9) {
                    const actions = badPositionsIndex.includes(i) ? 1 : 2; 
                    if(leftActions >= actions) {
                        numbers[numbers.length - 1 - i] = numbers[i] = 9;
                        leftActions -= actions;
                    }
                } else {
                    if(leftActions >= 1 && numbers[numbers.length - 1 - i] != 9){
                        numbers[numbers.length - 1 - i] = numbers[i] = 9;
                        leftActions -= 1;
                    }
                }
            }
        )

        if(numbers.length % 2 === 1 && leftActions) {
            numbers[Math.floor((numbers.length / 2))] = 9;
        };

        return parseInt(numbers.map((n) => n.toString()).join(""))
    }

    return -1;
}
