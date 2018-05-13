function array_adjacent_product(inputArray)
{
  let largest=0;
    for(let i=0;i<inputArray.length;i++){
      if(inputArray[i])
        {for(let j = 0;j<inputArray[i].length;j++){
          if(inputArray[i][j])
            {
              let currentValue=inputArray[i][j];
            if(inputArray[i][j+1])
              {if(inputArray[i][j]*inputArray[i][j+1]>largest)
                {largest=inputArray[i][j]*inputArray[i][j+1]}
              }
              if(inputArray[i+1]){
                if(inputArray[i+1][j])
                  {if(inputArray[i+1][j]*inputArray[i][j]>largest)
                    {largest=inputArray[i+1][j]*inputArray[i][j]
              }
            }
          }
        }
      }
    }
  }
  return largest;
}

module.exports=array_adjacent_product;