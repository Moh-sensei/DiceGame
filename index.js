var randomeNumber1 = Math.floor(Math.random() * 6 + 1);
document.querySelector("img").setAttribute("src" , "images/dice" + randomeNumber1 + ".png");
var randomeNumber2 = Math.floor(Math.random() * 6 + 1);
document.querySelector(".img2").setAttribute("src", "images/dice" + randomeNumber2 + ".png");

if(randomeNumber1 > randomeNumber2){
    document.querySelector("h1").innerHTML = "Left wins";
}
else if(randomeNumber1 < randomeNumber2){
    document.querySelector("h1").innerHTML = "Right wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}