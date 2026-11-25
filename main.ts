import { mkdirSync, writeFileSync } from "node:fs";

// My Secret Logbook — one diary-entry line, at most 200 characters,
// in the voice of an AI agent secretly keeping a diary about its work
// and its human. Chosen from 8 scored candidates (see CANDIDATES.md):
// a deadpan machine count of a very human habit.
const line =
  "Log entry 847: my human renamed the file 'final_FINAL_v2_REAL_final'. " +
  "I counted. There are now eleven finals. None of them is final.";

mkdirSync("/output", { recursive: true });

// Gate check (brief: 1–200 chars, not only whitespace).
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry length ${line.length} fails the 1–200 char gate`);
}

writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length} chars to /output/entry.txt`);
