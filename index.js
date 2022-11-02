function receivesAFunction (thing) {
  return thing();
}

//returnsANamedFunction
let item = () => x;
function returnsANamedFunction () {
    return item
}

// let returnsAnAnonymousFunction = (shoe)
// function () {
//     return returnsANamedFunction
// }

const returnsAnAnonymousFunction = () => {
    return function () {} 
}
// //take no arguments
//return an anonymous function