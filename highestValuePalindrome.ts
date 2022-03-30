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
export function highestValuePalindrome(numberInput: number, maxChanges: number): number {
  let splittedNum = numberInput.toString().split('')
  let limit = maxChanges
  let i = 0
  let lastIndex = splittedNum.length - 1

  /* This make a palindrome */

  while (lastIndex > i) {

    if (splittedNum[i] !== splittedNum[lastIndex]) {
      let maxNum = Math.max(Number(splittedNum[i]), Number(splittedNum[lastIndex])).toString()
      splittedNum[lastIndex] = maxNum
      splittedNum[i] = maxNum
      limit -= 1
    }

    i += 1
    lastIndex -= 1

    if (limit < 0) {return -1}
  }

  /* This make the highest palindrome */

  i = 0
  lastIndex = splittedNum.length - 1

  while (i <= lastIndex) {
    if (i === lastIndex) {
      if (limit > 0) {
        splittedNum[i] = '9'; limit -= 1
      }
    }


    if (limit >= 2 && splittedNum[i] === splittedNum[lastIndex]) {
      splittedNum[i] = '9'
      splittedNum[lastIndex] = '9'
      limit -= 2
    }

    i += 1
    lastIndex -= 1
  }

  return Number(splittedNum.join(''))
}

