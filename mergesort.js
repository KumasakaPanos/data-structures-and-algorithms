module.exports = mergeSortObject = {};
mergeSortObject.mergeSort = function(inputArray)
{
    return(mergeSortObject.__mergeSort(inputArray));
}

mergeSortObject.__mergeSort = function(givenArray)
{
    r=givenArray.length;
    let m = Math.ceil(r/2);
    console.log(givenArray,m,r);
    if(r>1)
    {
    //let m = Math.ceil(l+r/2);
    return(mergeSortObject.arraySorter(mergeSortObject.__mergeSort(givenArray.slice(0,m)),mergeSortObject.__mergeSort(givenArray.splice(m,r+1))));
    }
    return(givenArray);
}

mergeSortObject.arraySorter = function(array1,array2)
{
    let returnArray = [];
    console.log(array1);
    console.log(array2);
    if(array1&&array2){
        let j = 0;
        let i = 0;
        console.log(array1.length);
    while(i <= array1.length){
        console.log(returnArray);
        if(array1[i]===undefined){
            while(j<array2.length){
                returnArray.push(array2[j]);
                j++
            }
            return returnArray;
        }
        while(array1[i]>array2[j]){
            returnArray.push(array2[j]);
            j++;
        }
        returnArray.push(array1[i]);
        i++
    }
    console.log('return array',returnArray);
    return returnArray
    }
    console.log(array1,array2);
    if(array1)
    {
        return array1
    }
    return array2;
}