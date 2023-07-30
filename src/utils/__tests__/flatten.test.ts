import { flatten, flatten2, flatten3, flatten4 } from '../flatten';

describe('数组扁平化', () => {
  it('空数组', () => {
    const res: any[] = [];
    expect(flatten(res)).toEqual([]);
  });
  it('一级嵌套数组', () => {
    const res: any[] = [1, 2, [4, 5], 8];
    expect(flatten(res)).toEqual([1, 2, 4, 5, 8]);
  });
  it('二级嵌套数组', () => {
    const res: any[] = [1, 2, [4, 5, [6, 7]], 8];
    expect(flatten(res)).toEqual([1, 2, 4, 5, [6, 7], 8]);
  });
});

describe('数组扁平化concat', () => {
  it('空数组', () => {
    const res: any[] = [];
    expect(flatten2(res)).toEqual([]);
  });
  it('一级嵌套数组', () => {
    const res: any[] = [1, 2, [4, 5], 8];
    expect(flatten2(res)).toEqual([1, 2, 4, 5, 8]);
  });
  it('二级嵌套数组', () => {
    const res: any[] = [1, 2, [4, 5, [6, 7]], 8];
    expect(flatten2(res)).toEqual([1, 2, 4, 5, [6, 7], 8]);
  });
});

describe('任意层级数组扁平化reduce', () => {
  it('空数组', () => {
    const res: any[] = [];
    expect(flatten3(res)).toEqual([]);
  });
  it('一级嵌套数组', () => {
    const res: any[] = [1, 2, [4, 5], 8];
    expect(flatten3(res)).toEqual([1, 2, 4, 5, 8]);
  });
  it('二级嵌套数组', () => {
    const res: any[] = [1, 2, [4, 5, [6, 7]], 8];
    expect(flatten3(res)).toEqual([1, 2, 4, 5, 6, 7, 8]);
  });
  it('三级嵌套数组', () => {
    const res: any[] = [1, 2, [4, 5, [6, 7, [9, 10, 11]]], 8];
    expect(flatten3(res)).toEqual([1, 2, 4, 5, 6, 7, 9, 10, 11, 8]);
  });
});

describe('任意层级数组扁平化concat', () => {
  it('空数组', () => {
    const res: any[] = [];
    expect(flatten4(res)).toEqual([]);
  });
  it('一级嵌套数组', () => {
    const res: any[] = [1, 2, [4, 5], 8];
    expect(flatten4(res)).toEqual([1, 2, 4, 5, 8]);
  });
  it('二级嵌套数组', () => {
    const res: any[] = [1, 2, [4, 5, [6, 7]], 8];
    expect(flatten4(res)).toEqual([1, 2, 4, 5, 6, 7, 8]);
  });
  it('三级嵌套数组', () => {
    const res: any[] = [1, 2, [4, 5, [6, 7, [9, 10, 11]]], 8];
    expect(flatten4(res)).toEqual([1, 2, 4, 5, 6, 7, 9, 10, 11, 8]);
  });
});
