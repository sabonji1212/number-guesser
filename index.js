const minnum = 1;
const maxnum = 10;
let random = Math.floor(Math.random()*(maxnum - minnum +1) + minnum);

let attemps = 0;
let guess;


function writeit(){

    let guess = document.getElementById("typenum").value;
    guess = Number(guess);
    if(guess < minnum || guess> maxnum){
    
    window.alert("Enter A Valid Number");
    }else{
        attemps++;
        if(guess>random){
            document.getElementById("zatxt").textContent=""
            document.getElementById("zatxt1").textContent=""

            document.getElementById("zatxt2").textContent="TOO HIGH!"

        }else if (guess<random){
            document.getElementById("zatxt").textContent=""
            document.getElementById("zatxt1").textContent=""
            document.getElementById("zatxt2").textContent="TOO LOW!"

        }else if (guess = random){
            document.getElementById("zatxt").textContent= `Correct It Took You ${attemps} Attempts`
            document.getElementById("zatxt1").textContent=``
            document.getElementById("zatxt2").textContent=""

            reset();

        }
        
    }
   
};
function reset(){
    attemps = 0;
    random = Math.floor(Math.random()*(maxnum - minnum +1) + minnum);


}




document.getElementById("label1").textContent = `Guess A Number Between ${minnum} - ${maxnum}`;
document.getElementById("guessButton").addEventListener("click", writeit);










