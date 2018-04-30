function LargestProduct(array){
    let max=0;
    for(let i=0;i<array.length;i++)
    {if(array[i][1]*array[i][2]>max){
        max=array[i][1]*array[i][2]
    }}
}
