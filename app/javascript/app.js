// app.js is treated as a ES module because it contains import statements

// commonjs-a is transpiled as a commonjs module
const a = require('./commonjs-a')

// esmodule-b is transpiled as an es module
// but imported as if it's a commonjs module
// so the logged result appears as
const b = require('./esmodule-b')

// commonjs-c is transpiled as a commonjs module
// and imported via a compatibility functions
// __webpack_require__.n, __webpack_require__.d
// the import is also hoisted to the top of the file
import c from './commonjs-c'

// esmodule-d is transpiled as an es module
import d from './esmodule-d'

// Logs:
// Result
// > {a: "a", b: Module, c: "c", d: "d"}
// a: "a"
// b: Module {default: "b", __esModule: true, Symbol(Symbol.toStringTag): "Module"}
// c: "c"
// d: "d"
console.log('Result', { a, b, c, d })
