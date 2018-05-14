'use strict';
const Node = require('../lib/node')
const linkedList = require('../lib/linked-list')

console.log(linkedList);

test('tree testing',()=>{
    let testTree=new linkedList(1);
    testTree.append(2);
    let testTree2=new linkedList(3);
    let testTree3=testTree.mergeList(testTree2);
    console.log(testTree3.head.data)
    console.log(testTree3.head);
    expect(testTree3.head.data).toEqual(1);
    expect(testTree3.head.next.data).toEqual(3);
    expect(testTree3.head.next.next.data).toEqual(2);
})