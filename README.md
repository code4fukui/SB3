# SB3

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Scratch 3.0 (SB3) file manipulator.

## Features
- Load and parse SB3 files
- Extract block count
- Access project data, including targets, variables, and resources

## Requirements
- JavaScript runtime (e.g. Node.js, Deno)

## Usage
```javascript
import { SB3 } from "https://code4fukui.github.io/SB3/SB3.js";

const bin = await Deno.readFile("example.sb3");
const sb3 = new SB3(bin);
console.log(`Total blocks: ${sb3.getCountBlocks()}`);
```

## License
MIT License — see [LICENSE](LICENSE).