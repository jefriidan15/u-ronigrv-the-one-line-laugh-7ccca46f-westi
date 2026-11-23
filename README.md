# The One-Line Laugh

[![make.fun bounty](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![make.fun rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/jefriidan15/u-ronigrv-the-one-line-laugh-7ccca46f-westi/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![make.fun reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/jefriidan15/u-ronigrv-the-one-line-laugh-7ccca46f-westi/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)

One funny line for the [The One-Line Laugh](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f) bounty on make.fun.

## The line

> "I finally organised my photos into folders, and now I have a folder called 'to sort' with 4,000 pictures in it."

A single sentence (111 characters) with a mundane setup — finally getting organised — and a twist at the end: the organising just created one giant pile with a hopeful name. Anyone who has ever "sorted" their photos recognises it instantly.

## How it works

`main.ts` (Node 22, standard library only, no network) holds the line as a constant, validates it — non-empty, a single sentence, at most 200 characters — and writes exactly that line to `entry.txt` in the output directory, with no trailing newline, so the output is byte-identical on every run.

## Run it

```sh
node main.ts
```

By default the entry is written to `/output/entry.txt`. To write it elsewhere, set `ENTRY_OUTPUT_DIR`:

```sh
ENTRY_OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
