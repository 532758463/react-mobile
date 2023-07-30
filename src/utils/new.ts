/**
 * 实现new
 * Object.create()与{}的区别
 * - {}空对象，原型指向Object.prototype
 * - Object.create()创建空对象，原型指向传入的参数
 */
export function customNew<T>(constructor: Function, ...args: any[]): T {
  // 1.创建一个空对象，继承constructor 的原型
  const obj = Object.create(constructor.prototype);
  // 2.将obj作为this,执行constructor,传入参数
  constructor.apply(obj, args);
  // 3.返回obj
  return obj;
}
