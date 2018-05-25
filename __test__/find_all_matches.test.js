let Tree=require('../tree');
let Node=require('../node');
let findAllMatches=require('../find_all_matches');

console.log(findAllMatches)
describe('function testing',()=>{
    test('Testing for corrent length of returned array',()=>{
        let testTree=new Tree();

        testTree.addNode('a');
        testTree.addNode('b');
        testTree.addNode('c');
        testTree.addNode('b');
        testTree.addNode('b',testTree.head.children[0]);
        testTree.addNode('b',testTree.head.children[0]);
        testTree.addNode('b',testTree.head.children[0].children[0]);
        
        let testNode=new Node('b')

        let testArray=findAllMatches.find_all_matches(testTree,'b');
        console.log(testArray);
        expect(testArray.length).toEqual(5);
        expect(testArray[4]).toEqual(testNode)
    })
})
