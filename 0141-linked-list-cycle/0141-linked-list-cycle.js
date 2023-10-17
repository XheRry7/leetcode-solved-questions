/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  // curr is the one who is running fast and head is runing slow and curr is catching fast at a point if
  //  curr succeed in catching the slow one than it is a circular linkedlist
  let curr = head;
  while (curr && curr.next) {
    head = head.next;
    curr = curr.next.next;
    if (head === curr) return true;
  }
  return false;

};