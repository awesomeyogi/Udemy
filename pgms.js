//Reverse Of A String Program

var s = prompt("What is your name");
var t = "";
for(var i=s.length-1;i>=0;i--)
{
var ch = s.charAt(i);
t = t + ch;
}
alert("The Reverse of your name is "+"* "+t+" *");

//*************************************************************************************************** */

//Palindrome Or Not

var s = prompt("Enter a String!!!");
var t = "";
for(var i=s.length-1;i>=0;i--)
{
var ch = s.charAt(i);
t = t + ch;
}
if(t === s)
{
    alert("Given String is a Palindrome");
}
else
{
    alert("Given String is not a Palindrome");
}

//************************************************************************************************** */

//Removing Duplicates in an Array

var arr = [1,2,3,1,4,2,5];
function Duplicates()
{
    for(var i =0;i<arr.length;i++)
{
    for(var j=1;j<arr.length;j++)
    {
        if(arr[i] == arr[j])
        {
           break;
        }
    }
   if(i==j)
   {
    console.log("The Duplicated Elements are : " + arr[j]);
   }
}
}
