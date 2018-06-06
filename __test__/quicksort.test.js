let quickSort = require('../quicksort');
let testArray = [1,3,9,8,2,7,5]
let answerArray = [1,2,3,5,7,8,9]
quickSort.quickSort(testArray);

test('checking for merging of values',()=>{
expect(testArray).toEqual(answerArray)
});