Node=require('./library/node');
LinkedList=require('./library/linked-list')
Quene=require('./library/quene')



function KAryTree(Data){
    this.head=new Node(Data);
    this.newLeaf=function(Data,oldNode)
    {
        if(!oldNode.children) {
            oldNode.children=new LinkedList(Data);
            return null;
        }
    let currentNode=oldNode.children.head;
    while(currentNode.next)
    {currentNode=currentNode.next}
    currentNode.next=new Node(Data);
    }

    this.printLevelOrder=function(tree)
    {
        let nodeQuene=new Quene();
        let floorIndicator=true;
        var returnValue=tree.head.value;
        this.printLevelOrder__(tree.head);
    }

    this.printLevelOrder__=function(node)
    {
        console.log(returnValue);
        floorIndicator=true;
        if(!node.children){return null}
        let currentNode=node.children.head;
        while(currentNode.next)
        {returnValue=`${returnValue}${currentNode.value}`;
        nodeQuene.enquene(currentNode);
        currentNode=currentNode.next}
        returnValue=`${returnValue}${currentNode.value}`;
        this.printLevelOrder__(nodeQuene.dequene());
        if(floorIndicator===true)
        {floorIndicator=true;
        returnValue=`${returnValue}\n`}
    }
}

module.exports=KAryTree