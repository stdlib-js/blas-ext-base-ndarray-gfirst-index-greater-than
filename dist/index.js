/** @license Apache-2.0 */

'use strict';

/**
* Return the index of the first element in a one-dimensional ndarray which is greater than a corresponding element in another one-dimensional ndarray.
*
* @module @stdlib/blas-ext-base-ndarray-gfirst-index-greater-than
*
* @example
* var vector = require( '@stdlib/ndarray-vector-ctor' );
* var gfirstIndexGreaterThan = require( '@stdlib/blas-ext-base-ndarray-gfirst-index-greater-than' );
*
* var x = vector( [ 0.0, 0.0, 1.0, 0.0 ], 'generic' );
* var y = vector( [ 0.0, 0.0, 0.0, 0.0 ], 'generic' );
*
* var idx = gfirstIndexGreaterThan( [ x, y ] );
* // returns 2
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
