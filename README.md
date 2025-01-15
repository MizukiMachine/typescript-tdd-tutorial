# TypeScript Jest Tutorial

このリポジトリは、TypeScriptとJestを使ったテスト開発の基本を学ぶためのサンプルコードを提供します。
Zenn記事「[TypeScript/ハンズオン]テスト駆動開発(TDD)入門 第2回：Jestではじめるテスト開発」のサンプルコードです。

## 概要

文字列を逆順にする`reverseString`関数を例に、以下の内容を整理しました

- TypeScriptプロジェクトのセットアップ方法
- Jestを使用した基本的なテストの書き方
- 非同期処理のテスト方法
- エラーハンドリングのテスト方法
- デバッグの手法

## 必要要件

- Node.js (v16以上)
- npm (v8以上)

## セットアップ

```bash
# リポジトリのクローン
git clone https://github.com/MizukiMachine/typescript-tdd-tutorial.git
cd typescript-jest-tutorial

# 依存パッケージのインストール
npm install
```

## 使い方

```bash
# 全てのテストを1回実行
npm test

# テストを監視モードで実行（ファイル変更を検知して自動実行）
npm run test:watch

# テストカバレッジの確認
npm test -- --coverage

# 特定のファイルのみテスト実行
npm test -- reverseString.test.ts

# 特定のテスト名で実行（部分一致）
npm test -- -t "reverseString"
```

## プロジェクト構造

```
src/
├── reverseString.ts          # 文字列反転の実装
├── reverseString.test.ts     # 基本的なテストケース
├── asyncReverse.ts           # 非同期版の実装
└── asyncReverse.test.ts      # 非同期処理のテスト
```

## 学習ステップ

1. 基本的なテストの作成
   - 単純な文字列反転のテスト
   - テストスイートの構造化

2. 様々なマッチャーの使用
   - 厳密な等価性チェック
   - オブジェクトの比較
   - 部分一致の確認
   - 真偽値のテスト

3. 非同期処理のテスト
   - async/awaitの使用
   - Promiseベースのテスト

4. エラー処理のテスト
   - 例外のスロー確認
   - エラーメッセージのテスト

## デバッグ方法

1. コンソール出力を使用
```bash
npm test -- --verbose
```

2. VSCodeでのデバッグ
- `launch.json`の設定例を参照
- ブレークポイントの使用方法

## 関連記事

- [テスト駆動開発(TDD)入門 第2回：Jestではじめるテスト開発](https://zenn.dev/nezumizuki/articles/b9dd543d601218)

## ライセンス

MIT

## 貢献について

Issue、Pull Requestは大歓迎です。
特に以下の点での貢献を歓迎します

- 新しいテストケースの追加
- ドキュメントの改善
- バグ修正

