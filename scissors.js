let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector(".userScore");
const compScorePara = document.querySelector(".compScore");

msg = document.querySelector(".msg");

const choices = document.querySelectorAll(".obb");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
     return options[randIdx];
};

drawGame =() => {
    msg.innerText = "This Game is a Draw";
    // msg.classList = ("msgg");
    // console.log("DRAW");
    msg.style.backgroundColor = "blue";
}

userWon =() =>{
         // console.log("user won");
         msg.innerText = "You Won!";
        //  msg.classList = ("msg");
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
}

compWon = () =>{
     // console.log("comp won");
     msg.innerText = "You Lose!";
    //  msg.classList = ("msg");
    msg.style.backgroundColor = "red";
    compScore++;
    compScorePara.innerText = compScore;
}

const playGame = (userChoice) =>{
    console.log("user Choice", userChoice);
    // generate comp choice 
    const compChoice = genCompChoice();
    console.log("comp Choice", compChoice);
    
    if(userChoice === compChoice){
        //  Draw Game
        drawGame();                
    }else if(userChoice === "rock" && compChoice === "paper" || userChoice === "paper" && compChoice === "scissors" || userChoice === "scissors" && compChoice === "rock"){
        compWon();
    }else if (userChoice === "paper" && compChoice === "rock" || userChoice === "scissors" && compChoice === "paper" || userChoice === "rock" && compChoice === "scissors"){
           userWon();
    }
};
    
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});