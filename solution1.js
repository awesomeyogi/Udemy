function printReverse(arr)
{
    for(var i =arr.length-1;i>=0;i--)
    {
        console.log(arr[i]);
    }
}

printReverse([3,6,2,5]);

//*** isuniform() ***

// function isUniform(arr)
// {
//     var first = arr[0];
//     arr.forEach(function(element)
//     {
//         if(element !== first)
//         {
//             return false;
//         }
//     });
//         return true;
// }
function sumArray(num)
{
    var total = 0;
    num.forEach(function(element){
        total+= element;
    });
    return total;
}

//max() function example
function max(arr)
{
    var max = arr[0];
   for(var i=1;i<arr.length;i++)
   {
       if(arr[i] > max){
           max = arr[i];
       }
   } 
   return max;
}

