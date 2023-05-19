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
    expect(list.head.next).toEqual(2);
    expect(list.head.next.next).toBeNull;
    list.append('a');
    expect(list.head.next.next.value).toEqual('a');
  });

});
