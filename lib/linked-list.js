const Node = require('../lib/node');

linkedList=function(data){
    this.head=new Node(data);
    this.append=function(data){
        let currentNode=this.head;
        while(currentNode.next!==undefined)
        {currentNode=currentNode.next;}
        currentNode.next=new Node(data);
    }

    this.kthFromEnd=function(distance){
        let counter=1;
        let currentNode=this.head;
        while(counter<distance){
            counter+=1;
            currentNode=currentNode.next;
        }
        return currentNode.data;
    }
}

module.exports=linkedList;