/**
 *LRU -Least Recently Used最近使用
 *如果内存优先，只缓存最近使用的，删除”沉水“数据
 *核心API两个：get set
 * 用哈希表存储数据，这样get,set才够快
 * 有序可排序，常用数据在前面，”沉水“数据放在后面
 * 哈希表(对象、map)+有序，就是Map
 */
export class LRUCache {
  private length: number;
  private data: Map<unknown, unknown> = new Map();
  constructor(length: number) {
    if (length < 1) throw new Error('invalid length');
    this.length = length;
  }
  set(key: unknown, value: unknown) {
    const data = this.data;
    // 删除了重新建立
    if (data.has(key)) {
      data.delete(key);
    }
    data.set(key, value);
    // 如果超出了容量，删除最老的元素
    if (data.size > this.length) {
      const delKey = data.keys().next().value;
      data.delete(delKey);
    }
  }
  get(key: unknown): unknown {
    const data = this.data;
    if (!data.has(key)) return null;
    const value = data.get(key);
    // 删掉再加进来就是最新的，保持最新
    data.delete(key);
    data.set(key, value);
    return value;
  }
}
