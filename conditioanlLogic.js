prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if(loveScore > 70){
    alert("Your love score is " + loveScore + "%." + "\nYou love each other so much!");
}

if(loveScore > 30 && loveScore <= 70){
    alert("Your love score is " + loveScore + "%.");
}

if(loveScore <= 30){
    alert("Your love score is " + loveScore + "%." + "\nYou go together like oil and water");
}