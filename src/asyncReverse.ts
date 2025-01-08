export async function asyncReverseString(str: string): Promise<string> {
  // 非同期処理をシュミレート
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(str.split('').reverse().join(''));
    }, 100);
  });
}
