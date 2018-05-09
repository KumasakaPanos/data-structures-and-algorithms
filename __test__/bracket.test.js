'use strict';

checker=require('../bracket-chest')

let testTrue='{}([])';
let testFalse='{()';

describe('Check to make sure the function can identify a correctly formatted string.',()=>
{expect(checker.bracketChecker(testTrue)===true)})

describe('Check to make sure the function can identify an incorrectly formatted string.',()=>
{expect(checker.bracketChecker(testFalse)===false)})