var image1 = document.querySelector("#image1");
var image2 = document.querySelector("#image2");
let resultPara = document.querySelector(".result h3");


let rand1 = Math.floor(Math.random()*3);
let rand2 = Math.floor(Math.random()*3);

var picArr = ["rock", "paper", "scissor"];

let randoImg1 = picArr[rand1];
let randoImg2 = picArr[rand2];

console.log(`./images/${randoImg1}.png`)
console.log(`./images/${randoImg2}.png`)

let imageUrl1 = `./images/${randoImg1}.png`
image1.setAttribute("src", imageUrl1);

let imageUrl2 = `./images/${randoImg2}.png`
image2.setAttribute("src", imageUrl2);

if(randoImg1 === "scissor" && randoImg2 === "scissor"){
    resultPara.innerHTML = "it's  Draw";
}
else if(randoImg1 === "rock" && randoImg2 === "rock"){
    resultPara.innerHTML = "it's  Draw";
}
else if(randoImg1 === "paper" && randoImg2 === "paper"){
    resultPara.innerHTML = "it's  Draw";
}
else if(randoImg1 === "rock" && randoImg2 === "paper"){
    resultPara.innerHTML = "player 1 wins";
}
else if(randoImg1 === "paper" && randoImg2 === "rock"){
    resultPara.innerHTML = "player 2 wins";
}
else if(randoImg1 === "paper" && randoImg2 === "scissor"){
    resultPara.innerHTML = "player 2 wins";
}
else if(randoImg1 === "scissor" && randoImg2 === "paper"){
    resultPara.innerHTML = "player 1 wins";
}
else if(randoImg1 === "rock" && randoImg2 === "scissor"){
    resultPara.innerHTML = "player 1 wins";
}
else if(randoImg1 === "scissor" && randoImg2 === "rock"){
    resultPara.innerHTML = "player 2 wins";
}
else{}

function refresh(){
        window.location.reload("Refresh")
    }





