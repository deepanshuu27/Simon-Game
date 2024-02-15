let gameseq =[];
let userseq=[];

let start=false;
let level=0;
let highest_score=0;
let h2=document.querySelector("h2");
let high=document.querySelector("#high");

let btns=["yellow", "red", "green","purple"];


document.addEventListener("keypress",function(eve){
    if(eve.key=="Enter" && start==false){
        console.log("game is started");

        start=true;
        levelup();
    }
});

function levelup(){

    userseq=[];
level++;
h2.innerText= `level ${level}`;

let random= Math.floor(Math.random()*3);
let randcol= btns[random];

let randbtn= document.querySelector(`.${randcol}`);
gameseq.push(randcol)
console.log(gameseq);
gameflash(randbtn);

}


function gameflash(btn){

    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },200);

}

function userflash(btn){

    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);

}


let allbtns = document.querySelectorAll(".btn");
for( let btn of allbtns){
btn.addEventListener("click",btnpress);
}

function btnpress(){
    

    let btn= this;
    userflash(btn);

    usercolor= btn.getAttribute("id");
    userseq.push(usercolor);


    checkans(userseq.length-1);
}



function checkans(idx){

 if(userseq[idx] ==  gameseq[idx]){

    if(userseq.length == gameseq.length){
          setTimeout(levelup,1000);
    }
 }

  else{
h2.innerHTML= `Game Over! Your score was <b>${level}</b><br> Press Enter key to start`;


if(highest_score<level)
highest_score=level;
high.innerText=` Your highest score is ${highest_score}`;



reset();


document.querySelector("body").style.backgroundColor="red";
setTimeout(function(){
    document.querySelector("body").style.backgroundColor="rgb(238, 218, 193)";
},150);

}

}

function reset(){
    start= false;
    gameseq=[];
    userseq=[];
    level=0;
}