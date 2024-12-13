"use strict";

function create_intervals(a){
    let b = '';
    let start, finish;
    for( let i = 1; i < a.length; i ++){
        for (let j = 0; j < a.length - 1; j++){
            if(a[j] > a[j+1])
                {
                    let c = a[j];
                    a[j] = a[j+1];
                    a[j+1] = c;
                }
        }
    }
    for(let i=0; i < a.length - 1;){
        if((a[i+1]- a[i]) != 1)
        {
            b = b+  a[i] + ',';
            i++;
        }
        else{
            start = a[i];
            while( (a[i+1] - a[i]) == 1 && i+1 < a.length)
            {
                i++;
            }
            finish = a[i];
            if (i == a.length - 1)
                b = b + start + '-' + finish;
            else
                b = b + start + '-' + finish + ',';
                i++;
        }
        if (i == a.length - 1)
            b += a[i];   
    }
    return b;
}

console.log(create_intervals([1,4,3,2,5,8,0,11,9]));
