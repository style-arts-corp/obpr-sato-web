# Style Arts テンプレート

Vite + React + TypeScript のテンプレートです。

## はじめに

### node をインストール

node のバージョンは 20.9.0 です。
[.node-version](.node-version)で固定しているので、[nodenv](https://github.com/nodenv/nodenv)をインストールの上、node のインストールも行ってください。

### モジュールをインストール

```bash
pnpm install
```

#### pnpm をインストールしていない場合は以下を実行

バージョン8.0以上のインストールをお願いします。(package.jsonでバージョン指定をしています。)

```bash
npm install -g pnpm
```

### 開発用サーバーを起動

```bash
pnpm dev
```

## 開発ルール

### ブランチ戦略

main ブランチからブランチを切って開発を進めてください。

ブランチ名は`feature/`という prefix がついていれば、以降は任意で問題ありません。

code owner から 1 つ以上 approve をもらっていれば merge して良いです。 (※ 但し、他の code owner からの指摘が残っている場合はその限りではないです)

なお、merge の際はコミット履歴を綺麗に保つため、squash merge してください。

### ファイル作成

ファイル作成にあたっては、原則、以下のコマンドを用いて行ってください。

#### コンポーネントの作成

```bash
pnpm scaffold:fc
```

#### Hooks の作成

```bash
pnpm scaffold:hooks
```

#### Provider の作成

```bash
pnpm scaffold:provider
```

