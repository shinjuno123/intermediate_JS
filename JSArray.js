var guestList = ["Mackie","Jack","Pam","Jesus","Budda","Junho"];

var guestName = prompt("What is your name?");

if (guestList.includes(guestName)){
    alert("Welcome!");
}else{
    alert("Sorry maybe next time.");
}
