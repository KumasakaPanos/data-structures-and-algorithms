'use strict'
function shiftArray(arr,val){
    console.log(arr);
    let half=Math.floor(arr.length/2);
    let temp=new Array;
    for(let i=0;i<arr.length;i++)
        {
        if(i===half){temp.push(0)}
        temp.push(arr[i]);
        }
        temp[half]=val;
    return temp;
    }
module.exports=shiftArray;