const Tree = require('../print_level_order');

testTree=new Tree('a');
testTree.newLeaf('b',testTree.head);
testTree.newLeaf('c',testTree.head);
testTree.newLeaf('d',testTree.head);
testTree.newLeaf('e',testTree.head.children.head);
testTree.newLeaf('f',testTree.head.children.head.next);
testTree.newLeaf('g',testTree.head.children.head.children.head);
testTree.newLeaf('h',testTree.head.children.head.children.head);
testTree.newLeaf('i',testTree.head.children.head.children.head);

expect(testTree.printLevelOrder(testTree)).toEqual('a\nbcd\nef\nghi')