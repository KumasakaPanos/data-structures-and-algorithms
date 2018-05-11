const Tree=require('../horizontalTraverser')

let Maple=new Tree();

Maple.head=new Maple.Node(1);
Maple.head.left=new Maple.Node(2);
Maple.head.left.left=new Maple.Node(3);
Maple.head.left.right=new Maple.Node(5)
Maple.head.right=new Maple.Node(15);
test('testing horizontal traversal',()=>{
    let result=Maple.traverser();
    expect(result).toEqual(`15`);
});