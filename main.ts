import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Big Laugh (u-coral-404-one-line-big-laugh-328fb857).
// The program writes a single funny line, 1-200 UTF-8 chars, to /output/entry.txt.
const LINE =
  "My calendar reminded me I have a meeting with myself, so I declined \u2014 I know how I am.";

// No trailing newline: the gate counts every character, and the tie-break
// prefers the smaller text, so the file holds exactly the line, nothing else.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
