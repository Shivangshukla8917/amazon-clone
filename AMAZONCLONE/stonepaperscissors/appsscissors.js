let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-choice");
const compScorepara = document.querySelector("#comp-choice");
//for random input srom user
const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = math.floor(math.random()*3);
    return options[randIdx];
};
const drawgame = ()=> {
    console.log("game was draw.");
    msg.innerText = "game was draw. play gain";
    msg.style.backgroundcolor = "#081b31";
};
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
        userScore++;
        userScorepara.innerText = userScore;
       // console.log("you win!");
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundcolor = "green";
    }else {
        compScore++;
        compScorepara.innerText = compScore;
       // console.log("you lose");
        msg.innerText = `you lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundcolor = "red";
    }
};

const playGame = (userChoice) => {
    //console.log("user choice = ", userChoice);
    //genertae computer choice
    //console.log("comp choice = ",CompChoice);
    const compChoice = genCompChoice();

    if (userChoice === CompChoice) {
        drawGame();
    }else {
        let userWin = true;
        if(userChoice ==="rock") {
            //scissor,paper
            userWin = compChoice === "scissors" ? true: false;
        }else if(userChoice ==="paper") {
            //scissor,rock
          userWin = compChoice === "scissors" ? false:true;
        }else {
            //rock,paper
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
       // Console.log("choice was clicked",choiceId);
        playGame(userChoice);
    });
});