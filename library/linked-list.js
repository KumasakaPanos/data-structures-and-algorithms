Node = require('./node')

linked_list=function(Data)
{
    this.head=new Node(Data);
    
    this.append=function(Data)
    {
        let currentNode = this.head;
        while(currentNode.next){currentNode=currentNode.next}
        currentNode.next=new Node(Data);
    }
}
module.exports=linked_list