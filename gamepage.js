// random value generated
  var y= Math.floor(Math.random()*10 +1);
  guess=0;
  var x= document.getElementById("guessField").value;
// counting the number of guesses
// made for correct Guess
function submit()
{
if(x==y)
{
    alert("Congratulations"+playername+"You got the number so you are not a noob"
    +guess +"GUESS")
    guess=1
}
else if(x>y)
{
    guess++;
    alert("OOPS NOOB try a smaller number")
}
else{
    guess++
    alert("oops sorry noob try a greater number to be a pro")
}
}
function playagain(){
    y= Math.floor(Math.random()*10+1);
    guess=0;
    document.getElementById("guessField").innerHTML="";
}
// function for number guessed by user     
