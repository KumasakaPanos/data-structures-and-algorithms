let mergeSort = require('../mergesort')
let testArray = [2,14,5,1,56,6];
let answerArray = [1,2,5,6,14,56];
test('testing mergesort', ()=>{
    expect(mergeSort.mergeSort(testArray)).toEqual(answerArray);
})