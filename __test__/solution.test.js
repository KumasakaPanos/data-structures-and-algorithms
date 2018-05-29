const testFunction = require('../solution');

const testString='The quick brown dog jumped on a lazy fox.'
const testString1='The peckish pidgeons presumptously perused the packed park.'
const testString2='Grork brought his club to the club so he could club his dates.'

test('testing no match', ()=>{
    expect(testFunction(testString)).toEqual('No matches found');
})

test('testing no input', ()=>{
    expect(testFunction('')).toEqual('Invalid input')
})

test('Checking match with different case', ()=>{
    expect(testFunction(testString1)).toEqual('the')
})

test('Checking match with same case', () => {
    expect(testFunction(testString2)).toEqual('club')
})