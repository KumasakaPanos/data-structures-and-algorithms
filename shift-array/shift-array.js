'use strict'
function shiftArray(arr,val){
    let temp=arr;
    arr[arr.length]=temp[temp.length-1];
    let rounder=temp.length%2;
    let mid=parseInt(temp.length/2)+rounder;
    for(let i=mid;i<temp.length-1;i++){
        arr[i+1]=temp[i];
    }
    arr[mid]=val;
    return arr;
}