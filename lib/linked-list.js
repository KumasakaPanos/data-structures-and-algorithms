const Node = require('../lib/node');

linkedList=function(data){
    this.head=new Node(data);
    this.append=function(data){
        let currentNode=this.head;
        while(currentNode.next!==undefined)
        {currentNode=currentNode.next;}
        currentNode.next=new Node(data);
    }

this.mergeList=function(otherList){
    let newList=new linkedList(this.head.data);
    let counter=0;
    let node1=otherList.head;
    let node2=this.head.next;
    let repeat=false;
    while(repeat!==true)
    {
        if(node1)
        {newList.append(node1.data)
        node1=node1.next}
        if(node2)
        {newList.append(node2.data)
        node2=node2.next}
        if(!node1&&!node2)
        {repeat=true;}
    }
return(newList);}
}

module.exports=linkedList;