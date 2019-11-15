function Person(firstName,lastName,favouriteColor,favouriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favouriteColor = favouriteColor;
    this.favouriteNumber = favouriteNumber;
    this.multiplyFavouriteNumber = function(num){
        return num * this.favouriteNumber;
    }
}


function Parent(firstName,lastName,favouriteColor,favouriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favouriteColor = favouriteColor;
    this.favouriteFood = favouriteFood;
}
function child(firstName,lastName,favouriteColor,favouriteFood){
    parent.call(this,firstName,favouriteColor,lastName,favouriteColor,favouriteFood);
}
