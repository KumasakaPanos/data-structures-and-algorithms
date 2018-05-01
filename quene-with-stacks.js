// function Node(){
// this.content;
// this.next;
// }
// function Stack(){
//     this.oldNode=null;
//     this.head=null;
//     this.push=function(StackInput){
//         this.head=new Node()
//         if(StackInput===Node()){
//             this.head=StackInput;
//             this.head.next=this.oldNode;
//             this.oldNode=this.head;
//         }else
//             {
//             if(this.oldNode===null){
//                 this.head.content=StackInput;
//                 this.oldNode=this.head;
//             }
//             else{
//                 this.head.next=this.oldNode;
//                 this.head.content=StackInput;
//                 this.oldNode=this.head;
//             }
//         }
//     }
//     this.pop=function(){   
//         let oldHead=this.head;
//         console.log(this.head);
//         this.head=this.head.next;
//         return(oldHead);
//     }
// }
function Stack(){
    this.content=new Array;
    this.push=function(stackInput){
        this.content.push(stackInput);
    }
    this.pop=function(){
        return(this.content.pop());
    }
}
function Quene(){
    this._Stack1=new Stack();
    this._Stack2=new Stack();
    this.enquene = function(input){this._Stack1.push(input)}
    this.transfer=function(stackA,stackB){
        let pushContent='bup';
        while(pushContent!==undefined)
        {pushContent=stackA.pop()
        if(pushContent!==undefined)
        {stackB.push(pushContent)}}
    }
    this.dequene=function(){
        this.transfer(this._Stack1,this._Stack2);
        this._Stack2.pop();
    }
}