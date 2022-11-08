/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function getLl(list){
    function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
     }
let head = null;
let curr = null;
let flag=1;
if(list.length===0)
     return head;
list.forEach(element => {
    let nd = new ListNode(element);
    if(flag){
        head = nd;
        curr = head;
        flag--;
    }
    else{
        curr.next = nd;
        curr = curr.next;
    }
  });
  return head;
}
 var mergeTwoLists = function(list1, list2) {
    list1 =list1.concat(list2).sort((a,b)=>a-b)
    let head1 = getLl(list1);
    //let head2 = getLl(list2);
    
    function display(){
        curr=head1;
        while(curr.next !== null){
            console.log(curr.val);
            curr=curr.next;
        }
        console.log(curr.val);
    }
    display();
    //console.log(head1);
    //return head1;
};
mergeTwoLists([1,2,4],[1,3,4]);