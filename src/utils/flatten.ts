/**
 * 数组扁平化(一层)
 */
export function flatten(arr: any[]): any[] {
  const res: any[] = [];
  if (Array.isArray(arr)) {
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        item.forEach((n) => res.push(n));
      } else {
        res.push(item);
      }
    });
  }
  return res;
}

/**
 * 数组扁平化，使用concat
 */

export function flatten2(arr: any[]): any[] {
  let res: any[] = [];
  if (Array.isArray(arr)) {
    arr.forEach((item) => {
      res = res.concat(item);
    });
  }
  return res;
}

/**
 * 任意层级数组扁平化
 * @param arr 输入的数组
 * @param num 扁平化层级
 */
export function flatten3(arr: any[], num: number = Infinity): any[] {
  if (Array.isArray(arr)) {
    return num > 0
      ? arr.reduce(
          (prev: unknown[], cur: unknown[]) =>
            prev.concat(Array.isArray(cur) ? flatten3(cur, num - 1) : cur),
          []
        )
      : arr.slice();
  }
  return arr;
}

/**
 * 任意层级数组扁平化
 */
export function flatten4(arr: any[]): any[] {
  let res: any[] = [];
  if (Array.isArray(arr)) {
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        res = res.concat(flatten4(item));
      } else {
        res = res.concat(item);
      }
    });
  }
  return res;
}
