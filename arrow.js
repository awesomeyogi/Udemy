let tripeAndFilter = arr => arr.map(val => val*3).filter(val => val%5 ===0);
let doubleOddNumbers = arr => arr.filter(val => val%2 !==0).map (val => val*2);
let mapFilterAndReduce = arr => arr.map(val => val.firstName
).filter(val =>val.length <5)
.reduce((acc,next) => {
    acc[next] = next.length
    return acc;
},{})

var createStudentObj = (firstName,lastName) => ({firstName:firstName,lastName:lastName})

var instructor = {
    firstName: "Colt",
    sayHi: function(){
      setTimeout(() => {
        console.log('Hello ' + this.firstName)
      },1000)
    }
}

