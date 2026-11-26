// The Moon Gets One Star — one-liner entry generator.
//
// Writes a single one-star review of the Moon: it photographs beautifully,
// but up close it is grey dust, and it dragged the reviewer's tide out at
// 3am without asking first.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a reversal — the glowing postcard Moon flips into a rude
// neighbour who moves your tide in the middle of the night.
// 109 characters, inside the 120 cap.
const ENTRY =
  "★☆☆☆☆ Looks great in photos. Up close it is just grey dust, and it dragged my tide out at 3am without asking.";

// Output directory: MAKEFUN_OUTPUT_DIR when set, otherwise the grader's
// absolute default /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
