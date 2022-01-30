// Arrow Function to Sum all numbers in an array :

let sumOfNumbers = (a) => {
    let b=0;
    a.map((e)=>{
        b+=e;
    });
    console.log(b);            //output--->  15
}
sumOfNumbers([1,2,3,4,5]);