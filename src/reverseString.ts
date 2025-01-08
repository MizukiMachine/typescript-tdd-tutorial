export function reverseString(str: string): string {
  // 入力値の検証を追加
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  return str.split('').reverse().join('');
}
