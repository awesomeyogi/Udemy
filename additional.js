// function copyObject(obj){
//     return Object.assign({}, obj)
// }

// function checkIfFinite(a)
// {
// return Number.isFinite(a);
// }

// function areAllNumbersFinite(arr)
// {
//     return  arr.every(Number.isFinite);
// }

// function convertArrayLikeObject(obj)
// {
//     return Array.from(obj);
// }

function displayEvenArguments(){
    return Array.from(arguments).filter(val => val %2 ===0);
}

