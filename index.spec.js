import mergeTwoList, { ListNode } from '.';

describe('tests', () => {
   it('returns [1,1,2,3,4,4]', () => {
      const list1 = new ListNode(1, { val: 2, next: { val: 4 } });
      const list2 = new ListNode(1, { val: 3, next: { val: 4 } });

      mergeTwoList(list1, list2);

      expect(list2).toEqual({
         next: { next: { next: { next: { val: 4 }, val: 4 }, val: 3 }, val: 2 },
         val: 1,
      });
   });
});
