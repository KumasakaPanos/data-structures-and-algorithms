'use strict';
const Node = require('../lib/node')
const linkedList = require('../lib/linked-list')

console.log(linkedList);

test('tree testing',()=>{
    let testTree=new linkedList(1);
    testTree.append(2);
    expect(testTree.kthFromEnd(2)).toEqual(2);
})