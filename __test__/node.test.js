const Node = require('../lib/node');
console.log(Node);

test('node testing',()=>{
    let testNode=new Node(1);
    expect(testNode.data).toEqual(1);
})