// Snooze Button Roast — one-liner entry for make.fun
// Writes exactly one funny line to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

// REVISED line (v2): fixes real defects in the draft:
// - Draft had the wrong subject ("alarm clock hit snooze" — the human hits snooze).
// - Draft sagged in the middle with three clauses ("unionized, demanded overtime, and now...").
// - Revision tightens to two beats, keeps the strongest punchline, and lands faster.
const line =
  "I hit snooze so many times my alarm joined a union — now it only rings for people who actually get up.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
