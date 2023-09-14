const max = prompt("Enter the max number ");
const random = Math.floor(Math.random() * max ) + 1;
let guess = prompt("Guess the number") 
while(true){
        if(guess=="quit"){
            console.log("quitting game")
            break;
        }
        if(guess==random){
            console.log("Game Win the random number was " ,random);
            break;
        }else{
            guess = prompt("Wrong Guess Please try again ")
            
        }
}    