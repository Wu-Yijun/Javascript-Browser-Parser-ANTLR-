// const fs = require("fs")
// import fs from "fs"

// const antlr4 = require("antlr4/index")
// const calcLexer = require("./calcLexer.js")
// const calcParser = require("./calcParser.js")
// const JSListener = require("./JSListener.js").JSListener

import antlr4 from "./node_modules/antlr4/src/antlr4/index.web.js"
// import calcLexer from "./calcLexer.js"
// import calcParser from "./calcParser.js"
// import JSListener from "./JSListener.js"

// const DEBUG = false

// if (process.argv.length < 3) {
//     console.log("No source given.")
//     process.exit(1)
// }
// const iName = process.argv[2]

// if (DEBUG) {
//     process.argv.forEach(function (val, no, array) {
//         console.log(no + ': ' + val)
//     });
// }

const iName = "test.calc"


// JSListener.tFileName = iName.replace(".calc", ".js")
// console.log("Compiling " + iName + " to " + JSListener.tFileName)

// var input = fs.readFileSync(iName, 'UTF-8')
// var chars = new antlr4.InputStream(input)
// var lexer = new calcLexer.calcLexer(chars)
// var tokens = new antlr4.CommonTokenStream(lexer)
// var parser = new calcParser.calcParser(tokens)
// parser.buildParseTrees = true
// var tree = parser.program()

// var extractor = new JSListener()
// antlr4.tree.ParseTreeWalker.DEFAULT.walk(extractor, tree)

