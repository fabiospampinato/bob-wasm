# Bob WASM

A port of [Svgbob](https://github.com/ivanceras/svgbob) to WASM.

## Install

```sh
npm install --save bob-wasm
```

## Usage

```ts
import bob from 'bob-wasm';

await bob.loadWASM (); // First of all you need to load the WASM instance and wait for it

const input = `

    .----.        .----.
   /      \      /      \            .-----+-----+-----.
  +        +----+        +----.      |     |     |     |          .-----+-----+-----+-----+
   \      /      \      /      \     |     |     |     |         /     /     /     /     /
    +----+        +----+        +    +-----+-----+-----+        +-----+-----+-----+-----+
   /      \      /      \      /     |     |     |     |       /     /     /     /     /
  +        +----+        +----+      |     |     |     |      +-----+-----+-----+-----+
   \      /      \      /      \     +-----+-----+-----+     /     /     /     /     /
    '----+        +----+        +    |     |     |     |    +-----+-----+-----+-----+
          \      /      \      /     |     |     |     |   /     /     /     /     /
           '----'        '----'      '-----+-----+-----'  '-----+-----+-----+-----+

       ___     ___      .---+---+---+---+---.     .---+---+---+---.  .---.   .---.
   ___/   \___/   \     |   |   |   |   |   |    / \ / \ / \ / \ /   |   +---+   |
  /   \___/   \___/     +---+---+---+---+---+   +---+---+---+---+    +---+   +---+
  \___/   \___/   \     |   |   |   |   |   |    \ / \ / \ / \ / \   |   +---+   |
  /   \___/   \___/     +---+---+---+---+---+     +---+---+---+---+  +---+   +---+
  \___/   \___/   \     |   |   |   |   |   |    / \ / \ / \ / \ /   |   +---+   |
      \___/   \___/     '---+---+---+---+---'   '---+---+---+---'    '---'   '---'

`;

const svg = bob.render ( input );
```

## License

- Library: MIT © Fabio Spampinato
- Svgbob: Apache 2.0 [Svgbob](https://github.com/ivanceras/svgbob)