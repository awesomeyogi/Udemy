var secretNumber = 9;
var guess = prompt("Guess a number","");
if(Number(guess) === secretNumber)
 {
    alert("YOU GOT IT RIGHT");
}
else if(Number(guess) > secretNumber)
{
    alert("Too High....Guess it again...");
}
else 
{
    alert("Too Low...Guess it again ");
}
