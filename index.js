export class ListNode {
   constructor(val, next) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
   }
}

function mergeTwoList(list1, list2) {
   let head = { val: undefined, next: undefined };
   let current = head;

   if (!list2) return list1;
   if (!list1) return list2;
   if (!list1 && !list2) return null;

   while (list1 && list2) {
      if (list1.val <= list2.val) {
         current.next = list1;
         list1 = list1.next;
         current = current.next;
      } else {
         current.next = list2;
         list2 = list2.next;
         current = current.next;
      }
   }
   current.next = list1 ? list1 : list2;
   return head.next;
}

export default mergeTwoList;
