# SB3


Scratch 3.0 (SB3) ファイルマニピュレーター。

## 特徴
- SB3ファイルの読み込みと解析
- ブロック数の抽出
- ターゲット、変数、リソースを含むプロジェクトデータへのアクセス

## 要件
- JavaScriptランタイム (例: Node.js、Deno)

## 使い方
```javascript
import { SB3 } from "https://code4fukui.github.io/SB3/SB3.js";

const bin = await Deno.readFile("example.sb3");
const sb3 = new SB3(bin);
console.log(`Total blocks: ${sb3.getCountBlocks()}`);
```

## ライセンス
MIT License — [LICENSE](LICENSE) を参照。
