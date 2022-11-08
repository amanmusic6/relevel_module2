function Node(data){
    this.data=data;
    this.next=null;
}
// let head = new Node(25);
// let snd = new Node(10)
// snd.next=new Node(5);
// head.next=snd
// console.log(head);
// console.log(snd);
//-------------------------------------------------------
let head = null;
function insertAtLast(data){
    let newNode = new Node(data);
        if(head===null){
            head = newNode;
        }
        else{
            let curr = head;
            while(curr.next !== null){
                curr=curr.next;
            }
            curr.next = newNode;
        }
}
insertAtLast(5);
insertAtLast(15);
insertAtLast(25);
insertAtLast(30);
insertAtLast(35);
//console.log(head);
// 1  2->3->4->5->6->null
function insertAtFirst(data){
    let newNode = new Node(data);
    if(head === null){
        head = newNode;
    }
    else{
        newNode.next=head;
        head = newNode;
        // let nextNode = head.next;
        // newNode.next=nextNode;
        // head = newNode;
    }
}
// insertAtFirst(2);
// console.log(head);
function insertAtPos(data,pos){
    let curr = head;
    let index=0;
    let newNode = new Node(data);
    if(head === null){
        head = newNode;
    }
    else{
        while(index !== pos-1 && curr.next !== null){
            curr=curr.next;
            index++;
        }
        if(index===pos-1){
            let newNode = new Node(data);
            newNode.next=curr.next;
            curr.next=newNode;
        }
    }
}
//insertAtPos(20,2)
function display(){
    let curr=head;
    while(curr.next !== null){
        console.log(curr.data);
        curr=curr.next;
    }
    console.log(curr.data);
}
display();