import { EventBus } from '../eventBus';

describe('EventBus 事件总线', () => {
  it('事件绑定,触发事件', () => {
    const event = new EventBus();
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    const fn3 = jest.fn();
    event.on('key1', fn1);
    event.on('key1', fn2);
    event.on('xxx', fn3);
    event.emit('key1', 10, 20);
    expect(fn1).toBeCalledWith(10, 20);
    expect(fn2).toBeCalledWith(10, 20);
    expect(fn3).not.toBeCalled();
  });
  it('解绑单个事件off', () => {
    const event = new EventBus();
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    event.on('key1', fn1);
    event.on('key1', fn2);
    event.off('key1', fn1);
    event.emit('key1', 10, 20);
    expect(fn1).not.toBeCalled();
    expect(fn2).toBeCalledWith(10, 20);
  });
  it('解绑所有事件off', () => {
    const event = new EventBus();
    const fn1 = jest.fn();
    const fn2 = jest.fn();
    event.on('key1', fn1);
    event.on('key1', fn2);
    event.off('key1');
    event.emit('key1', 10, 20);
    expect(fn1).not.toBeCalled();
    expect(fn2).not.toBeCalled();
  });
  it('once 绑定事件只触发一次', () => {
    const event = new EventBus();
    let n = 1;
    const fn1 = jest.fn(() => n++);
    const fn2 = jest.fn(() => n++);
    event.once('key1', fn1);
    event.once('key1', fn2);
    event.emit('key1');
    expect(n).toBe(3);
    event.emit('key1');
    event.emit('key1');
    event.emit('key1');
    event.emit('key1');
    event.emit('key1');
    expect(n).toBe(3);
  });
});
