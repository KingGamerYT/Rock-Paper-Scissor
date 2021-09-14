let user_score = 0;
let computer_score = 0;
let userscore_span = document.getElementById("user-score"); 
let computerscore_span = document.getElementById("computer-score");
const resut_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");



function getComputerChoice() {

    const choices = ["r", "p", "s"];
    const randomChoice = Math.floor(Math.random() * 3)
    
    return choices[randomChoice];
}


function game(UserChoice) {
    
    const computerChoice = getComputerChoice();

    switch (UserChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(UserChoice, computerChoice);
            break;
        
        case "rp":
        case "sr":
        case "ps":
            lose(UserChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(UserChoice, computerChoice);
            break;
    }
}

function removeBorder(UserChoice) {
    document.getElementById(UserChoice).classList.remove('green-border')
    document.getElementById(UserChoice).classList.remove('red-border')
    document.getElementById(UserChoice).classList.remove('gray-border')
}

function RealNames (letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter === "s") return "Scissor";
}

function win (userChoice, computerChoice) {
    user_score ++;
    userscore_span.innerHTML = user_score;
    computerscore_span.innerHTML = computer_score;
    resut_p.innerHTML = `${RealNames(userChoice)} beats ${RealNames(computerChoice)}. You win!`;
    document.getElementById(userChoice).classList.add("green-border");
    setInterval(() => {
        removeBorder(userChoice);
    }, 3000);
}

function lose (userChoice, computerChoice) {
    computer_score ++;
    userscore_span.innerHTML = user_score;
    computerscore_span.innerHTML = computer_score;
    resut_p.innerHTML = `${RealNames(computerChoice)} beats ${RealNames(userChoice)}. You lose!`;
    document.getElementById(userChoice).classList.add("red-border");
    setInterval(() => {
        removeBorder(userChoice);
    }, 3000);

}

function draw (userChoice, computerChoice) {
    resut_p.innerHTML = `Both Choose ${RealNames(userChoice)}. Its draw!`;
    document.getElementById(userChoice).classList.add("gray-border");
    setInterval(() => {
        removeBorder(userChoice);
    }, 3000);
}

function main () {

    rock_div.addEventListener('click', function() {
        
        rock_div.classList.remove('gray-border');
        rock_div.classList.remove('green-border');
        rock_div.classList.remove('red-border');
        game("r");

    });
    
    paper_div.addEventListener('click', function() {
        paper_div.classList.remove('gray-border');
        paper_div.classList.remove('green-border');
        paper_div.classList.remove('red-border');
        game("p");

    });
    
    scissor_div.addEventListener('click', function() {
        scissor_div.classList.remove('gray-border');
        scissor_div.classList.remove('green-border');
        scissor_div.classList.remove('red-border');
        game("s");

    });

}

main();