function handlePlay() {
    // console.log("Button Pressed")

    let score1= document.querySelector("#score1")
    let score2= document.querySelector("#score2")
    let score3= document.querySelector("#score3")

    num1=Math.floor(Math.random() * Math.floor(2))
    num2=Math.floor(Math.random() * Math.floor(2))
    num3=Math.floor(Math.random() * Math.floor(2))

    // console.log(num1, num2, num3)

    score1.textContent=num1;
    score2.textContent=num2;
    score3.textContent=num3;

    let gameResult=document.querySelector(".game-result-msg");

    if (num1===num2 && num1===num3){

        gameResult.textContent="Bingo..!!"
        gameResult.style.color="green"
    }
    else{
        gameResult.textContent="Oops..!! Try Again"
        gameResult.style.color="red"
    }

    // let btn = document.querySelector(".game-btn")

    // btn.textContent="Repeat"

}

let playBtn = document.querySelector(".game-btn");

playBtn.onclick= handlePlay