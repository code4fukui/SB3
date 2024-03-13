// based on https://fukuno.jig.jp/app/scratch/lib4scratch.js
// CC BY fukuno.jig.jp

import { unzip } from "https://taisukef.github.io/zlib.js/es/unzip.js";

export class SB3 {
  constructor(bin) {
    const pack = unzip(bin);
    //const filenames = unzip.getFilenames();
    const bytes = pack.decompress("project.json");
    if (!bytes) throw new Error("not sb3");
    const sjson = new TextDecoder().decode(bytes);
    const json = JSON.parse(sjson);
    this.pack = pack;
    this.project = json;
  }
  getCountBlocks() {
    const target = this.project.targets;
    let blkcnt = 0;
    for (var i = 0; i < target.length; i++) {
      const t = target[i];
      const name = t.name;
      const vars = t.variables;
      const blocks = t.blocks;
      let cnt = 0;
      for (var id in blocks) {
        const b = blocks[id];
        if (!b.parent) {
          //console.log(b.opcode, id);
        }
        cnt++;
      }
      blkcnt += cnt;
    }
    return blkcnt;
  }
  getTargets() {
    return this.project.targets;
  }
  getMonitors() {
    return this.project.monitors;
  }
  getResource(fn) {
    const bin = this.pack.decompress(fn);
    return bin;
  }
}
