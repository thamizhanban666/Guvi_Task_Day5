(function(a) {
    let b=[];
    a.map((e)=>{
        if(e%2==1){
            b.push(e);
        };
    });
    console.log(b);
})([1,2,3,4,5,6,7,8,9,10]);