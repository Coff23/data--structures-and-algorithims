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
    expect(list.find(2)).toStrictEqual(true);
    expect(list.find(77)).toStrictEqual(false);
  });

  test('traversal with values', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');

    list.traversal();

    expect(list).toEqual({'head':{'value':'a','next':{'value':'b','next':{'value':'c','next':{'value':'d','next':null}}}}});
  });

  test('traversal without values', () => {
    const list = new LinkedList();
    list.traversal();

    expect(list).toBeNull;
  });

});
