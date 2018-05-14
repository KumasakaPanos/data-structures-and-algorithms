const Node = require('../lib/node');

linkedList=function(data){
    this.head=new Node(data);
    this.append=function(data){
        let currentNode=this.head;
        while(currentNode.next!==undefined)
        {currentNode=currentNode.next;}
        currentNode.next=new Node(data);
    }

    this.insertBefore=function(value,newVal){
        let lastNode=null;
        let currentNode=this.head;
        while(currentNode.data!==newVal)
        {
        lastNode=currentNode;
        currentNode=currentNode.next;
        }
        let newNode=new Node(value);
        lastNode.next=newNode;
        newNode.next=currentNode;
    }
    
    this.insertAfter=function(value,newVal){
        let currentNode=this.head;
        while(currentNode.data!==newVal)
        {currentNode=currentNode.next;}
        let nextNode=new Node(value);
        nextNode.next=currentNode.next;
        currentNode.next=nextNode;
    }
}

module.exports=linkedList;