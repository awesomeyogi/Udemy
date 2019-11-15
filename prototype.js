// function Person(firstName,lastName,favouriteColor,favouriteNumber)
// {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.favouriteColor = favouriteColor;
//     this.favouriteNumber = favouriteNumber;
//     this.family = [];
// }
// Person.prototype.fullName= function(){
// return this.firstName +" "+this.lastName;
// }
// Person.prototype.favouritecolor = function(){
//     return this.favouriteColor;
// }
// Person.prototype.addToFamily = function(person){
//     if(this.family.indexOf(person) === -1 && person instanceof person){
//         this.family.push(person)
//     }
//     return this.family.length;
// }

String.prototype.reverse = function(){
    var newStr = ' ';
for(i=this.length-1;i>=0;i--)
{
    newStr += this[i];
}
return newStr;
}