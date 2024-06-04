# TimeTreeのBiomeの共通設定

## 導入手順

### 1. 設定ファイルをインストールする

https://jsr.io/@timetree/biome-config を参考にインストールする

ex) pnpmの場合 `pnpm dlx jsr add @timetree/biome-config`

### 2. `biome.json`をextendsする

各PJの`biome.json`に以下のように記述する

```json
{
  "extends": [
      "./node_modules/@timetree/biome-config/biome.json"
  ],
  ...
}
```

### 3. PJに合わせて設定をoverridesする

> overridesの設定方法は以下を参考
> https://biomejs.dev/ja/reference/configuration/#overrides

## リンク一覧

- https://jsr.io/@timetree/biome-config
