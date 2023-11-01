"use strict";


function sum(a, b){
    let s = Number(a) + Number(b);
    if (isNaN(s))
        return 'Incorrect input data';
    else
        return s;
}


function sum2(a){
    if (a[0] == undefined)
        return 'empty array';
    let s = 0;
    for(let i=0; i < a.length; i++)
        s+= Number(a[i]);
    if (isNaN(s))
        return 'Incorrect input data';
    else
        return s;
}

console.log(sum('1',32));
console.log(sum2([2,'2','2',3]));
