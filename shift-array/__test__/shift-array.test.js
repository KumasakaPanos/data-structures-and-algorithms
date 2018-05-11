const shift=require('../shift-array');


test('testing addition to center of array with odd length',()=>{
    let dug=[2,7,11];
    expect(shift(dug,3)).toEqual([2,3,7,11])
})


test('testing addition to center of array with even length',()=>{
    let dug=[2,7,11,15];
    expect(shift(dug,3)).toEqual([2,7,3,11,15])
})