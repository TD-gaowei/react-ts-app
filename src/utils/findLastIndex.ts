export function findLastIndex<T>(
  arr: T[],
  predicate: (value: T, index: number, obj: T[]) => boolean
): number {
  let index = arr.length;
  while (index--) {
    if (predicate(arr[index], index, arr)) {
      return index;
    }
  }
  return -1;
}
