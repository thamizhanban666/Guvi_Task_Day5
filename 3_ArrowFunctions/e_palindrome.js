// Arrow function to return all the palindromes in an array :

let   palindrome = (a) => {
    let i = 0;
    let j = a.length - 1;
    while(i < j) {
       if(a[i] === a[j]) {
          i++;
          j--;
       } else { return false; }
    }
    return true;
 };
const printPal = (array) => {
  let b= array.filter((e) => palindrome(e));
  return b; 
};
let arr = ['script', '56765', '123123', 'madam', 'lion', 'abcdcba']
console.log(printPal(arr));   //output--->   [ '56765', 'madam', 'abcdcba' ]