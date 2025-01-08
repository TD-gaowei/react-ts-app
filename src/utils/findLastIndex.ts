interface Predicate<T> {
  (value: T, index: number, obj: T[]): boolean;
}

export function findLastIndex<T>(arr: T[], predicate: Predicate<T>): number {
  let index = arr.length;
  while (index--) {
    if (predicate(arr[index], index, arr)) {
      return index;
    }
  }
  return -1;
}
