
var r1=Math.floor(Math.random()*6)+1;
var dice="images/dice"+r1+".png";
var p1=document.querySelector(".img1").setAttribute("src",dice);

var r2=Math.floor(Math.random()*6)+1;
var dice1="images/dice"+r2+".png";
var p2=document.querySelector(".img2").setAttribute("src",dice1);
if(r1>r2){
 document.querySelector("h1").innerHTML="Player 1 won";
}
else if(r1==r2){
    document.querySelector("h1").innerHTML="It's a Draw!!!"
}
else{
    document.querySelector("h1").innerHTML="Player 2 won";
}