 //  ANONYMOUS FUNCTION :
 let sumOfNumbers = function(a) {
    let b=0;
    a.map((e)=>{
        b+=e;
    });
    console.log(b);            //output--->  15
}
sumOfNumbers([1,2,3,4,5]);

// IIFE :
(function(a) {
    let b=0;
    a.map((e)=>{
        b+=e;
    });
    console.log(b);            //output--->  15
})([1,2,3,4,5]);