function binary-search(arr,var){
    for(let i=0;i<arr[arr.length-1];i++)
    {if(arr[i]===var){return(i)}}
    return -1;
}