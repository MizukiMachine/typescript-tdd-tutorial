import {reverseString} from './reverseString';

describe('reverseString', () => {
  // beforeEach: 各テストケースの前に実行
  beforeEach(() => {
    console.log('テストケース開始');
  });

  // afterEach: 各テストケースのあとに実行
  afterEach(() => {
    console.log('テストケース終了');
  });

  // ネストされたdescribeでテストケースをグループ化
  describe('basic functionality', () => {
    test('reverses a simple string', () => {
      expect(reverseString('hello')).toBe('olleh');
    });

    test('reverses a string with spaces', () => {
      expect(reverseString('hello world')).toBe('dlrow olleh')
    });
  });

  // 様々な検証メソッド（マッチャー）
  describe('Jest matchers examples', () => {
    // 厳密な等価性
    test('exact matching', () => {
        expect(reverseString('hello')).toBe('olleh');  // 文字列、数値、真偽値の比較
    });
  
    // オブジェクトの比較
    test('object matching', () => {
        const result = { text: reverseString('hello') };
        expect(result).toEqual({ text: 'olleh' });  // オブジェクトの内容比較
    });
  
    // 部分一致
    test('string containing', () => {
        const result = reverseString('hello');
        expect(result).toContain('ll');  // 部分文字列を含むか
    });
  
    // 真偽値
    test('truthiness', () => {
        const result = reverseString('hello');
        expect(result).toBeTruthy();  // null, undefined, false以外
        expect(result.length).toBeGreaterThan(0);  // 数値の比較
    });
  });

  // エラーテストを追加
  describe('reverseString error handling', () => {
    test('throws error for null input', () => {
        expect(() => {
            reverseString(null as any);
        }).toThrow('Input must be a string');
    });

    test('throws error for undefined input', () => {
        expect(() => {
            reverseString(undefined as any);
        }).toThrow('Input must be a string');
    });
  });

  // デバッグ用のテストを追加
  describe('debugging example', () => {
    test('debug with console', () => {
        const input = 'hello';
        console.log('Input:', input);  // テスト中の値を確認
        
        const result = reverseString(input);
        console.log('Result:', result);
        
        expect(result).toBe('olleh');
    });
  });
});
