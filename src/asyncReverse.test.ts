import { asyncReverseString } from './asyncReverse';

describe('asyncReverseString', () => {
    // 非同期テストの書き方1: async/await
    test('reverses string asynchronously', async () => {
        const result = await asyncReverseString('hello');
        expect(result).toBe('olleh');
    });

    // 非同期テストの書き方2: Promiseを返す
    test('reverses string asynchronously with promise', () => {
        return asyncReverseString('hello').then(result => {
            expect(result).toBe('olleh');
        });
    });
});
