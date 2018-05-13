const func=require('../binary-search')

test('Checking arrays of varying heights and lengths', ()=>{
    let arr=[[1],[3],[2],[4],[5],[6]];
    expect(func(arr)).toEqual(30);
})

test('Checking arrays of varying heights and lengths', ()=>{
    let arr=[[1],[2],[5],[4],[3]];
    expect(func(arr)).toEqual(20);
})

test('Checking arrays of varying heights and lengths', ()=>{
    let arr=[[1,4],[2,3],[4,6],[5,4],[1,3]]
    expect(func(arr)).toEqual(24);
})