'use strict';

const LinkedList = require('./index');

describe('Linked List', () => {
  test('Can successfully instantiate and empty linked list', () => {
    const list = new LinkedList();

    expect(list.head).toBeNull();
  });

  test('Can properly insert into a linked list', () => {
    const list = new LinkedList();
    list.insert(1);

    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull;
  });

  test('The head property will properly point to the first node in the linked list', () => {
    const list = new LinkedList();
    list.insert(2);

    expect(list.head.value).toEqual(2);
    expect(list.head.next).toBeNull;

    list.insert(1);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next).toBeNull;
    list.append('a');
    expect(list.head.next.next.value).toEqual('a');
  });

  test('traversal with values', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');

    list.traversal();

    expect(list).toEqual({'head':{'value':'a','next':{'value':'b','next':{'value':'c','next':{'value':'d','next':null}}}}});
    list.insertBefore(5, 'c');
    expect(list.head.next.next.value).toEqual(5);
    list.insertAfter(2, 'a');
    expect(list.head.next.value).toEqual(2);
    list.kthFromEnd(0);
    expect(list.head.next.next.next.next.next.value).toEqual('d');
  });

  test('traversal without values', () => {
    const list = new LinkedList();
    list.traversal();

    expect(list).toBeNull;
  });

  test('includes value', () => {
    const list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);

    expect(list.find(2)).toStrictEqual(true);
  });

  test('value not included', () => {
    const list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);

    expect(list.find(77)).toStrictEqual(false);
  });

  test('toStr', () => {
    const list = new LinkedList;
    list.append('a');
    list.append('b');
    list.append(3);
    list.append('d');

    expect(list.toStr()).toStrictEqual('{ a } -> { b } -> { 3 } -> { d } -> NULL');
  });

  test('kth from the end null', () => {
    const list = new LinkedList();

    expect(list.kthFromEnd(2)).toBeNull;
  });

  test('zipper', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    list1.append(1);
    list1.append(2);
    list1.append(3);
    list1.append(4);
    list1.append(5);

    list2.append(1);
    list2.append(2);
    list2.append(3);
    list2.append(4);
    list2.append(5);

    let zippedList = LinkedList.zipLists(list1, list2);

    expect(zippedList.toStr()).toEqual('{ 1 } -> { 1 } -> { 2 } -> { 2 } -> { 3 } -> { 3 } -> { 4 } -> { 4 } -> { 5 } -> { 5 } -> NULL');

  });

  test('reverse', () => {
    let list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);

    let reversedList = LinkedList.reverseLinkedList(list);

    expect(reversedList.toStr()).toEqual('{ 3 } -> { 2 } -> { 1 } -> NULL');
  });

});
