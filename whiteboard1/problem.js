'use strict'
function reverseArray (input) {
    let temp=0;
    for(var i=0;i<input.length;i++)
    {
        temp=input[i];
        input[i]=input[input.length-(i+1)];
        input[input.length-(i+1)]=temp;
    }
    return input;
}