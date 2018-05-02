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
function AnimalShelter(){
    this.dogs=new Quene();
    this.cats=new Quene();
    this.current=0;
    this.enquene=function(animal){
        if(animal==='dog')
    {this.dogs.enquene(animal);
        return('Your dog has been added to the list of animals awaiting adoption.')}
        if(animal==='cat')
    {this.cats.dequene(animal);
        return('Your cat has been added to the list of animals awaiting adoption.')}
    }
    this.dequene=function(species){
if(species===dog)
{return(dogs.pop())}
if(species===cat)
{return(cats.pop())}
switch(current){
    case 1:return(cats.pop())
    break;
    case 0:return(dogs.pop())
    break;
}
}
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
    this.content;
    this.enquene = function(input){
        this._Stack1.push(input);
        this.content=_Stack1.content;
    }
    this.transfer=function(stackA,stackB){
        let pushContent='test';
        while(pushContent!==undefined)
        {pushContent=stackA.pop()
        if(pushContent!==undefined)
        {stackB.push(pushContent)}}
    }
    this.dequene=function(Origin,Destination){
        this.transfer(Origin,Destination);
        Destination.pop();
        this.content=Destination
    }
}