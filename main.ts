// The One-Line Laugh — writes one funny line to /output/entry.txt.
//
// The line is a single sentence of at most 200 characters. This program
// validates it (non-empty, non-whitespace-only, single sentence, within
// the limit) and then writes exactly that line, with no trailing newline,
// so the output is byte-identical on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I finally organised my photos into folders, and now I have a folder called 'to sort' with 4,000 pictures in it.";

const MAX_CHARS = 200;

function validate(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("entry line must not be only whitespace");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `entry line is ${line.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  const sentenceEnders = line.replace(/[^.!?]/g, "");
  if (sentenceEnders.length !== 1) {
    throw new Error("entry line must be exactly one sentence");
  }
  if (!/[.!?]$/.test(line)) {
    throw new Error("entry line must end with its sentence-ending punctuation");
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("entry line must be a single line with no line breaks");
  }
}

function main(): void {
  validate(LINE);
  const outDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
