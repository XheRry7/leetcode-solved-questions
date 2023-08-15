/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // for an empty array
    if (head == null) {
        return head;
    }
    let currNode = head;
    // checking from second index of the list if it contains the value equivalent to the cval to check.
    while (currNode && currNode.next) {
        if (currNode.next.val == val) {
            currNode.next = currNode.next.next;
        }
        else{
        currNode = currNode.next;
        }
    }
    // checking if the first element is equivalent to val given.
    return head.val == val ? head.next : head;
};