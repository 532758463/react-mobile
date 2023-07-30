import { LRUCache } from '../LRU';

describe('LRUCache', () => {
  it('set get', () => {
    const lru = new LRUCache(2);
    lru.set(1, 100);
    lru.set(2, 200);
    expect(lru.get(1)).toBe(100);
    expect(lru.get(2)).toBe(200);
    lru.set(3, 300);
    expect(lru.get(1)).toBe(null);
    lru.set(4, 4); // {3=3,4=4}
    expect(lru.get(2)).toBe(null);
    expect(lru.get(3)).toBe(300);
    expect(lru.get(4)).toBe(4);
  });
  it('set超出容量', () => {
    const lru = new LRUCache(2);
    lru.set(1, 100);
    lru.set(2, 200);
    lru.set(3, 300);
    expect(lru.get(1)).toBe(null);
    lru.set(2, 201);
    lru.set(4, 400);
    expect(lru.get(3)).toBeNull();
    expect(lru.get(2)).toBe(201);
    expect(lru.get(4)).toBe(400);
  });
  it('get超出容量', () => {
    const lru = new LRUCache(2);
    lru.set(1, 100);
    lru.set(2, 200);
    lru.get(1);
    lru.set(3, 300);
    expect(lru.get(1)).toBe(100);
    expect(lru.get(2)).toBeNull();
    expect(lru.get(3)).toBe(300);
  });
});
