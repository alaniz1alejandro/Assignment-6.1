// a function to play craps 
// this script was created by:alejandro alaniz
function playCraps(){
console.log("placraps() started")
// step 1. roll 2 6 sided dice
var die1;
var die2;
die1 = Math.ceil(6 * Math.random());
die2 = Math.ceil(6 * Math.random());
// step 1b print results 
document.getElementById("die1Res").innerHTML = die1;
document.getElementById("die2Res").innerHTML = die2;
console.log("die1 is;" + die1);
console.log("die1 is;" + die2);
//step 2. calculate the sum of die 1 and die 2
var diceSum = die1 + die2;
console.log("the sum of the dice is;" + diceSum);
document.getElementById("dieSum").innerHTML = diceSum;
//*if(conditions for true){do this if conditions are true}else



//step 3. dose the sum equal 7 or 11, are you a loser

if(diceSum==7||diceSum==11){
    document.getElementById("gameRes").innerHTML = "too Bad Brother, you lose";
    
//step 4. did the dice come up double> are they even? if so you win
}else if(die1==die2 && die1%2 == 0){
    document.getElementById("gameRes").innerHTML = "You Win";


//step 5. outherwise push
}else {
    document.getElementById("gameRes").innerHTML = "you did not lose, please play again";
}


}
//chechCreds fuction
function checkCreds(){
    console.log("checkCreds started");
    document.getElementById("loginStatus").innerHTML = "Status of login"
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    
//this will store the characters in fName in the firstName var
firstName = document.getElementById("fName").value;
console.log("the first name inputed as " + firstName);
//this will store the characters in lName in the lastName var
lastName = document.getElementById("lName").value;
console.log("the last name inputed as " + lastName);
//this will store the characters in ZIPCode in the zipeCode var
zipCode = document.getElementById("zipCode").value;
console.log("the zip inputed as " + zipCode);
//this will store the combined characters of fName and lname in the fullName var
fullName = firstName + " " + lastName;
console.log("your full name is " + fullName);

fullNameLength = fullName.length;
console.log("the full name has " + fullNameLength +" characters");
//if the length of the name is more then 20 itll display false
if(fullNameLength > 20){
document.getElementById("loginStatus").innerHTML = "Invalid Name, please try again"
//else if the zipe is more or less the 5 numbers the itll display false
} else if(zipCode.length != 5){
    document.getElementById("loginStatus").innerHTML = "Invalid Zip, please try again"
//else both are correct then a alert will display
} else{
alert("user credientals passed, welcome to the site, " + fullName);
}


}