module.exports = quickSort = {};
quickSort.quickSort=function(inputArray){
    inputArray=this.__quickSort(inputArray);
    return(inputArray);
}

quickSort.__quickSort=function(inputArray){
    if(inputArray.length>1){
    let pivot = inputArray[inputArray.length-1];
    let storageArray = [];
    for(i = 0; i<inputArray.length;i++){
        if(inputArray[i]>pivot){
            storageArray.push(i);
        }
        else{
            if(storageArray[0])
            {
                console.log(inputArray)
            let tempIndex=storageArray.shift();
            let tempValue=inputArray[tempIndex];
            inputArray[tempIndex]=inputArray[i];
            inputArray[i]=tempValue;
            storageArray.push(i);
            console.log('elseif');
            }
        }
        console.log(inputArray,pivot,i)
        console.log(storageArray);
    }
    let mid=Math.ceil((inputArray.length-1)/2);
    return quickSort.__quickSort(inputArray.slice(0,mid)).concat(quickSort.__quickSort(inputArray.slice(mid,inputArray.length)));
}
console.log(inputArray);
}