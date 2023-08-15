/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let currNode = head;
    let arr = [];
    while(head && head.next){
        arr.push(head.val);
        head = head.next;
        if(head.next == null){
            arr.push(head.val)
        }
    } 
    let end = arr.length-1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == arr[end]){
            end--;
        }
        else{
            return false
        }
    }
    return true;
    
};