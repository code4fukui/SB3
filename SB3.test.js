import * as t from "https://deno.land/std/testing/asserts.ts";
import { SB3 } from "./SB3.js";

Deno.test("simple", async () => {
  const fn = "【拡散希望】異界の宇宙 〜潜水艦ゲーム〜.sb3";
  const sb3 = new SB3(await Deno.readFile(fn));
  t.assertEquals(sb3.getCountBlocks(), 1409);
});

Deno.test("res", async () => {
  const fn = "【拡散希望】異界の宇宙 〜潜水艦ゲーム〜.sb3";
  const sb3 = new SB3(await Deno.readFile(fn));
  const imgfn = sb3.getTargets()[0].costumes[0].md5ext;
  //console.log(imgfn);
  t.assertEquals(imgfn, "7a1de4edadcdb2dbbcbf8ab4c5d3e815.svg");
  const bin = sb3.getResource(imgfn);
  t.assertEquals(bin.length, 20069);
});
