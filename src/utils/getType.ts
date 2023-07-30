/**
 * 获取输入变量的数据类型
 * 1. typeof 只能判断值类型，其它就是function和object
 * 2.instanceof 需要两个参数来判断，而不是获取类型
 * 3.枚举各种类型：通过typeof 判断值类型和function,其他引用通过instanceof来逐个判断识别
 *如 x instanceof Map 则返回map
 */
export function getType1(x: any): string {
  if (typeof x === 'object') {
    if (x instanceof Array) return 'array';
    if (x instanceof Map) return 'map';
    return 'object';
  }
  return typeof x;
}

/**
 * 获取详细的数据类型
 * 使用 Object.prototype.toString.call(x)
 */
export function getType(x: unknown): string {
  const originType = Object.prototype.toString.call(x);
  const spaceIndex = originType.indexOf(' ');
  const type = originType.slice(spaceIndex + 1, -1);
  return type.toLowerCase();
}
