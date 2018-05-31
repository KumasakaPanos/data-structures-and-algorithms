let treeIntersection=require('../treeIntersection');
let Tree = require('../lib/tree');
import jest from 'jest';
let testTree=new Tree(1);
let testTree1=new Tree(1)
test('basic test',()=>{
    expect(treeIntersection(testTree,testTree1)).toEqual('1');
})