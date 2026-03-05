# one-stream 全機能カタログ

プランごとに使える全機能を目的別にわかりやすく確認できるWebアプリケーションです。

## 概要

one-streamの4つのプラン（Basic / Pro / Business / Enterprise）に応じた機能一覧を、10カテゴリの目的別に表示します。ユーザーは自分のプランを選択し、利用可能な機能や上位プランで解放される機能を確認できます。

### 画面構成

1. **ウェルカム画面** - アプリの説明と操作フロー
2. **プラン選択** - 4つのプランから選択
3. **目的別カテゴリ一覧** - コンテンツ配信・AI活用・収益化など10カテゴリ
4. **機能詳細** - カテゴリ内の機能一覧（プラン別タブ切り替え）
5. **サマリー** - 選択プランの全体像と上位プランへのアップグレード案内

## 技術スタック

- **React 19** + **TypeScript**
- **React Router 7** (フレームワークモード)
- **Tailwind CSS 4**
- **Vite 7**

## セットアップ

```bash
npm install
```

## 開発

```bash
npm run dev
```

`http://localhost:5173` でアプリケーションが起動します。

## ビルド・本番実行

```bash
npm run build
npm run start
```

## 型チェック

```bash
npm run typecheck
```

## Docker

```bash
docker build -t os-feature-catalog .
docker run -p 3000:3000 os-feature-catalog
```

## ディレクトリ構成

```
app/
  routes.ts          # ルーティング定義
  root.tsx           # ルートレイアウト
  app.css            # グローバルスタイル
  routes/
    home.tsx         # トップページ
  catalog/
    catalog.tsx      # カタログUIコンポーネント
    catalog.css      # カタログ専用スタイル
    data.ts          # プラン・カテゴリ・機能データ定義
```
