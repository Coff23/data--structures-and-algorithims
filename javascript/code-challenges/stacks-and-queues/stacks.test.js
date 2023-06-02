'use strict';

const { Stack } = require('./index');

describe('Stack test', () => {
  it('Push onto a stack', () => {
    let stack = new Stack();

    stack.push(1);

    expect(stack.top.value).toEqual(1);
    expect(stack.top.next).toBeNull();
  });

  it('Push multiple values on a stack', () => {
    let stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
    expect(stack.top.next.next.next).toBeNull();
  });

  it('Pop off of the stack', () => {
    let stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.top.value).toEqual(2);

    stack.pop();

    expect(stack.top.value).toEqual(1);
  });

  it('Peek test', () => {
    let stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toEqual(2);
  });

  it('Empty stack test', () => {
    let stack = new Stack();

    expect(stack.isEmpty()).toBeTruthy;
  });

  it('Brackets', () => {
    let stack = new Stack();

    expect(stack.validateBrackets('({)')).toEqual(false);
    expect(stack.validateBrackets('({[]})')).toEqual(true);
  });
});
