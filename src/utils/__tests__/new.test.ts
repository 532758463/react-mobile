import { customNew } from '../new';

describe('自定义new', () => {
  it('new', () => {
    class Foo {
      name: string;
      city: string;
      n: number;
      constructor(name: string, n: number) {
        this.name = name;
        this.city = '成都';
        this.n = n;
      }

      getName() {
        return this.name;
      }
    }
    const f = customNew<Foo>(Foo, 'xiao', 100);
    expect(f.name).toBe('xiao');
    expect(f.city).toBe('成都');
    expect(f.getName()).toBe('xiao');
    expect(f.n).toBe(100);
  });
});
