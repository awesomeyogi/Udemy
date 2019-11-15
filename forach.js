
// function doubleValues(arr)
// {
//     arr.forEach(function(val,i,array)
//     {
//         arr[i] += arr[i];
//     });
// return arr;
// }

// function doubleValues(arr){
//     arr.forEach(function(val, i, array){
//        arr[i] = 2 * val; 
//     });
//     return arr;
// }

// function evenValues(arr)
// {
//     arr.forEach(function(val,i,array){
//         if(val % 2 ==0)
//         {
//             console.log(val);
//         }
//     });
// }

// function onlyEvenValues(arr){
//     var even = [];
//     arr.forEach(function(val, i, array){
//        if (val % 2 === 0) {
//            even.push(val);
//        }
//     });
//      return even;
// }

// function showFirstAndLast(arr)
// {
//     arr.forEach(function(val,i)
//   {
//    var c = val.charAt(i);
//    if(i==0 && val==arr.length)
//    {
//        console.log(val[0] + val[val.length-1]);
//    }
//   });
// }

// function showFirstAndLast(arr){
//     var newArr = [];
//     arr.forEach(function(val){
//         newArr.push(val[0] + val[val.length-1]);
//     });
//     return newArr;    
// }

// function addKeyValue(arr,key,value)
// {
//    arr.forEach(function(val){
//        val[key] = value;
//    });
//    return arr;
// }



// function vowelCount(str){
//     var splitArr = str.split("");
//    var obj = {};
//    var vowels = "aeiou";

//    splitArr.forEach(function(letter){
//        if(vowels.indexOf(letter.toLowerCase()) !== -1){
//            if(obj[letter]){
//                obj[letter]++;
//            } else{
//                obj[letter] = 1;
//            }
//        }
//    });
//    return obj;  
// }

// function doubleValues(arr)
// {
//    return arr.map(function(val){
//         return val * 2;
//     });
// }


// function valTimesIndex(arr)
// {
//     return arr.map(function(val,i)
//     {
//         return val = val*i;
//     });
// }

// function extractKey(arr,key)
// {
//     return arr.map(function(val,i,array)
//     {
//         return val[key];
//     });
// }

// function extractFullName(arr,key1,key2)
// {
//     return arr.map(function(val,i,array)
//     {
//         return val[key1]+" "+val[key2];
//     });
// }

// function extractFullName(arr){
//     return arr.map(function(val){
//        return val.first + " " + val.last; 
//     });
// }

// function filterByValue(arr,key)
// {
//     return arr.filter(function(val,i,array)
//     {
//         return val[key];
//     })
// }

// function find(arr,searchVal)
// {
// return arr.filter(function(val,i,array)
// {
//     return val === searchVal;
// });
// }

// function findInObj(arr, key, searchValue){
//     return arr.filter(function(val, i, array){
//         return val[key] === searchValue;
//     });
// }



// function removeVowels(str)
// {
//     var vowels = "aeiou";
//     return str.toLowerCase().split("").filter(function(val){
//     return vowels.indexOf(val) === -1;
//     });
// }

// function doubleOddNumbers(arr)
// {
//     return arr.map(function(val,i,array)
//     {
//         return val *2;
//     }).filter(function(val){
//         return val/2 % 2 !==0;
//     });
// }

// function hasOddNumber(arr)
// {
//     return arr.some(function(val,i,array)
//     {
//         return val % 2 !==0;
//     });
// }

// function hasAZero(arr)
// {
//     return arr.toString().split('').some(function(val,i,array)
//     {
//         return val === '0';
//     });
// }

// function hasOnlyOddNumbers(arr)
// {
//     return arr.every(function(val)
//     {
//         return val % 2 !== 0;
//     })
// }


// function hasNoDuplicates(arr)
// {
//    return arr.every(function(val,i)
//     {
// return arr.indexOf(val) === arr.lastIndexOf(val);
//     })
// }


 fetch( http://www.omdbapi.com/apikey.aspx?VERIFYKEY=8840af40-115f-4e82-8e3e-d5c247dc4129 )
 .then((success) => { success.json() } )
 .then((movies) => { console.log(movies) } )
 .catch((error)=>{ console.log(error)});

// const array = [1, 2, [3, 4]];
// console.log(array.flat()); 

// const arr = ["it's Sunny in", "", "California"];
// console.log(arr.flatMap(x => x.split(" ")));


// function extractValue(arr,key)
// {
// return arr.reduce(function(accumulator,nextValue)
// {
//     accumulator.push(nextValue[key]);
//     return accumulator;
// },[]);
// }


// function vowelCount(str){
//     var vowels = "aeiou";
//     return str.toLowerCase().split('').reduce(function(acc, next){
//          if(vowels.indexOf(next) !== -1){
//              if(acc[next]){
//                  acc[next]++;
//              } else {
//                  acc[next] = 1;
//              }
//          }
//          return acc;
//     },{});
//  }


var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);






















