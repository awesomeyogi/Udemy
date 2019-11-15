// function smallestValue(...args)
// {
// return Math.min(...args)
// }

// function placeInMiddle(arr,val)
// {
// let mid = Math.floor(arr.length/2)
// arr.splice(mid,0,...val)
// return arr;
// }

function joinArrays(...args)
{
return args.reduce((acc,next) => acc.concat(next),[])
}

// function sumEvenArgs(...args){
//     return args.reduce((acc, next) => next % 2 === 0 ? acc += next : acc, 0)
// }

