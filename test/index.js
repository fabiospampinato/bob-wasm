
/* IMPORT */

import {describe} from 'fava';
import fs from 'node:fs';
import Bob from '../dist/index.js';

/* MAIN */

describe ( 'Bob', it => {

  it ( 'works', async t => {

    await Bob.loadWASM ();

    const input = fs.readFileSync ( './test/fixtures/input.txt', 'utf8' );
    const output = fs.readFileSync ( './test/fixtures/output.svg', 'utf8' );
    const result = await Bob.render ( input );

    t.is ( result, output );

  });

});
