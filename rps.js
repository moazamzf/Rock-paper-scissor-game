// Function to generate random number 
random = () =>  {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1
}

// Comparing player and computer choice and Updating Score
game = (p1,p2) => {
    if(p1==1 && p2==1){
        msg.innerText = "Both Selected rock";
        msg.style.backgroundColor = "#7b2cbf    ";
    }else if(p1==1 && p2==2){
        p2score++
        msg.innerText = "Computer won on Selecting Papers";
        msg.style.backgroundColor = "#fee440";
    } else if(p1==1&&p2==3){
        p1score++;
        msg.innerText = "You Won because computer selected Scissor";
        msg.style.backgroundColor = "#00bbf9";
    } else if(p1==2 && p2==1){
        p1score++;
        msg.innerText = "You won because computer selected Rock";
        msg.style.backgroundColor = "#00bbf9";
    } else if(p1==2 && p2==2){
        msg.innerText = "Both Selected Papers";
        msg.style.backgroundColor = "#7b2cbf";
    } else if(p1==2 && p2==3){
        p2score++;
        msg.innerText = "Computer Won on selcting Papers";
        msg.style.backgroundColor = "#fee440";
    }   else if(p1==3 && p2==1){
        p2score++;
        msg.innerText = "Computer won on Selecting Rock";
        msg.style.backgroundColor = "#fee440";
    }   else if(p1==3 && p2==3){
        msg.innerText = "Both Selected Scissors";
        msg.style.backgroundColor = "#7b2cbf";
    }   else {        
        msg.innerText = "Wrong Entery";        
        msg.style.backgroundColor = "#d00000";
    }
   }



let player = 0, computer = 0 , p1score = 0 , p2score = 0;
let stone = document.querySelector(".stone");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let start = document.querySelector(".start");
let resulut1 = document.querySelector(".p1score");
let result2 = document.querySelector(".p2score");
let reset = document.querySelector(".reset");
let msg = document.querySelector(".message");

stone.addEventListener("click", ()=>{
    player = 1;
})
paper.addEventListener("click", ()=>{
    player = 2;
})
scissors.addEventListener("click", ()=>{
    player = 3;
})

reset.addEventListener("click", ()=>{
    p1score=0;
    p2score=0;
    msg.innerText = "Game rested";
    msg.backgroundColor = "rgb(255, 184, 184)";
})

start.addEventListener("click",()=>{
    game(player,random());
    resulut1.innerHTML = p1score;
    result2.innerText = p2score;
})
