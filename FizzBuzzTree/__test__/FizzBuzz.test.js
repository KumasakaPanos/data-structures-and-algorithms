const Tree=require('../FizzBuzz')

let Maple=new Tree();

Maple.head=new Maple.Node(1);
Maple.head.left=new Maple.Node(2);
Maple.head.left.left=new Maple.Node(3);
Maple.head.left.right=new Maple.Node(5)
Maple.head.right=new Maple.Node(15);
Maple.FizzBuzz()
test('testing fizzBuzz',()=>{
    expect(Maple.head.left.key).toBe(2);
    expect(Maple.head.left.left.key).toBe('Fizz');
    expect(Maple.head.left.right.key).toBe('Buzz');
    expect(Maple.head.right.key).toBe('FizzBuzz');
    expect(Maple.head.key).toBe(1);
});