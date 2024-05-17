let userscore=0;
let compscore=0;

let user_scorePara=document.querySelector("#user-score");
let comp_scorePara=document.querySelector("#comp-score");

let userchoice,compchoice;

let msg=document.querySelector("#msg");

let choices=document.querySelectorAll(".choice");

for(let choice of choices){
    choice.addEventListener("click",()=>{
         userchoice=choice.getAttribute("id");
         compchoice=gencompchoice();
        playgame();
    });
};

const drawgame=()=>{
    // console.log("game is draw");
    msg.innerText="Game was draw";
    msg.style.backgroundColor="rgb(36, 36, 60)";
}

const gencompchoice=()=>{
   let idx= Math.floor(Math.random() * 3);
   const options=["rock","paper","scissors"];
   return options[idx];
}

const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        user_scorePara.innerText=userscore;
        msg.innerText=`You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        comp_scorePara.innerText=compscore;
        msg.innerText=`You lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame=()=>{
   if(userchoice===compchoice){
    drawgame()
   }
   else{
    let userwin=true;
    if(userchoice==="rock"){
        userwin=compchoice==="paper" ? false:true;
    }
    else if(userchoice==="paper"){
        userwin=compchoice==="scissors"? false:true;
    }
    else{
        userwin=compchoice==="rock"?false:true;
    }
    showWinner(userwin,userchoice,compchoice);
   }

}