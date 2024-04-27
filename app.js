let rbtn=document.querySelector("#btnrefresh");

rbtn.addEventListener("click",()=>{
   let p1=randomimg();
   let p2=randomimg();
   img1=`./images/dice${p1}.png`;
   img2=`./images/dice${p2}.png`;
   document.querySelector("#p1").setAttribute("src",img1);
   document.querySelector("#p2").setAttribute("src",img2);
   if(p1>p2){
    document.querySelector("#Score").innerText="Player 1 Wins"
   }
   else if(p1<p2){
    document.querySelector("#Score").innerText="Player 2 Wins"
   }
   else{
    document.querySelector("#Score").innerText="Draw"
   }
});

function randomimg(){
    return Math.floor(Math.random()*6)+1;
}
console.log("ss")