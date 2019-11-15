
// function specialMultiply(a,b){
//     if(arguments.length === 1){
//         return function(b){
//             return a*b;
//     }
//   }
//   return a*b;
// }
//var game = guessingGame(5);
// function guessingGame(amount)
// {
// var answer = Math.floor(Math.random()*11);
// var guesses = 0;
// var completd = false;
// return function(guess){
//     if(!completed){
//         guess++;
//         if(guess === answer){
//             completd = true;
//             return "No more guesses the answer was "+ answer;
//         }
//         else if(guess > answer) return "your guess is too high!"
//         else if(guess < answer) return "your guess is too low!"
//     }
//     return "you are all done playing"
// }
// }

function guessingGame(amount){
    var answer = Math.floor(Math.random()*11);
    var guesses = 0;
    var completed = false;
    return function(guess){
       if(!completed){
            guesses++
            if(guess === answer) {
                completed = true;
                return "You got it!"
            }
            else if(guesses === amount) {
                completed = true;
                return "No more guesses the answer was " + answer;
            }
            else if(guess > answer) return "Your guess is too high!"
            else if(guess < answer) return "Your guess is too low!"
        }
        return "You are all done playing!"
        
    }
}

