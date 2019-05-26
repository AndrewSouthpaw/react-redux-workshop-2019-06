/**
 * spit out to console and return value passed in
 * if 2 args passed in, print both, return 2nd
 */
global.spit = (...args) => {
  console.log(...args.map(arg => util.inspect(arg, { showHidden: false, depth: null })))
  return args[args.length - 1]
}
