'use strict';
const Node = require('../lib/node')
const linkedList = require('../lib/linked-list')

console.log(linkedList);

test('tree testing',()=>{
    let testTree=new linkedList(1);
    expect(testTree.head.data).toEqual(1);
    testTree.append(2);
    expect(testTree.head.next.data).toEqual(2);
    testTree.insertAfter(3,2);
    expect(testTree.head.next.next.data).toEqual(3);
    testTree.insertBefore(4,2);
    expect(testTree.head.next.data).toEqual(4);
})