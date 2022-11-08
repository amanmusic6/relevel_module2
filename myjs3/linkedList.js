const node1 ={
    data:125
}
const node2 ={
    data:120
}
node1.next=node2;
//console.log(node1);
//---------------------------------------------------------------------
class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}
let n1 = new Node(12);
console.log(n1);

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
}
//insert first node
insertFirst(data){
    this.head = new Node(data,this.head);
}
