let images = document.querySelectorAll(".choice");
let users = document.querySelector(".userScore");
let com = document.querySelector(".comScore");
let msg = document.querySelector(".msg");
let userScore = 0;
let comScore = 0;


images.forEach((image) => {
    image.addEventListener(("click"), () => {
        const array = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * array.length);
        const computer = array[randomIndex];
        let user = image.id;
        
        if (user === "rock" && computer === "paper"){
            msg.innerText = "Computer Wins";
            comScore += 1;
            com.innerText = comScore;
        }
        else if(user === "rock" && computer === "scissors"){
            msg.innerText = "You Win The Match";
            userScore += 1;
            users.innerText = userScore;
        }
        else if(user === "paper" && computer === "rock"){
            msg.innerText = "You Win The Match";
            userScore += 1;
            users.innerText = userScore;
        }
        else if(user === "paper" && computer === "scissors"){
            msg.innerText = "Computer Wins";
            comScore += 1;
            com.innerText = comScore;
        }
        else if(user === "scissor" && computer === "rock"){
            msg.innerText = "Computer Wins";
            comScore += 1;
            com.innerText = comScore;
        }
        else if(user === "scissor" && computer === "paper"){
            msg.innerText = "You Win The Match";
            userScore += 1;
            users.innerText = userScore;
        }
        else if (user === computer){
            msg.innerText = "Match is Draw";
        }

    });
});