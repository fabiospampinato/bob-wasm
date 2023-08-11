
/* IMPORT */

import BOB_BASE64 from '../svgbob/svgbob.js';
import decode from 'decode-base64';
import once from 'function-once';
import U8 from 'uint8-encoding';

/* MAIN */

const Bob = {

  /* LIFECYCLE API */

  loadWASM: once ( async (): Promise<void> => {

    const BOB_BUFFER = decode ( BOB_BASE64 );

    const module = await WebAssembly.instantiate ( BOB_BUFFER );
    const instance: any = module.instance.exports;

    Bob.render = ( source: string ): string => {

      const resultPointerStart = instance.__wbindgen_add_to_stack_pointer ( -16 );

      const sourceBuffer = U8.encode ( source );
      const sourcePointerStart = instance.__wbindgen_malloc ( sourceBuffer.length );
      const sourcePointerEnd = sourcePointerStart + sourceBuffer.length;

      const heap1 = new Uint8Array ( instance.memory.buffer );

      heap1.subarray ( sourcePointerStart, sourcePointerEnd ).set ( sourceBuffer );

      instance.render ( resultPointerStart, sourcePointerStart, sourceBuffer.length );

      const heap2 = new Int32Array ( instance.memory.buffer );

      const outputPointerStart = heap2[resultPointerStart / 4 + 0];
      const outputPointerEnd = heap2[resultPointerStart / 4 + 1];

      const heap3 = new Uint8Array ( instance.memory.buffer );

      const resultBuffer = heap3.subarray ( outputPointerStart, outputPointerStart + outputPointerEnd );
      const result = U8.decode ( resultBuffer );

      instance.__wbindgen_free ( outputPointerStart, outputPointerEnd );
      instance.__wbindgen_add_to_stack_pointer ( 16 );

      return result;

    };

  }),

  /* API */

  render: ( source: string ): string => {

    throw new Error ( '[bob] You need to call and await "bob.loadWASM" first' );

  }

};

/* EXPORT */

export default Bob;
