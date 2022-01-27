(()=>{
    const arr5 = ['java', '1001', '2020', 'madam', 'lion', 'mom'];
    const Palindrome = (a) => {
       let i = 0;
       let j = a.length - 1;
       while(i < j) {
          if(a[i] === a[j]) {
             i++;
             j--;
          } else {
             return false;
          }
       }
       return true;
    };
    const printPal = (a) => {
        let b= a.filter((e) => Palindrome(e));
        return b; 
    };
      
    console.log(printPal(arr5));
})();