
var audio = null;
//creates funtion for button onclick 
function disablefirstbutton() {
  //disables start button and enables stop button
  document.getElementById("startCountdown").disabled = true;
  document.getElementById("endCountdown").disabled = false;
}
//creates funtion for button onclick 
function disablesecondbutton() {
  //disables stop button and enables start button
  document.getElementById("endCountdown").disabled = true;
  document.getElementById("startCountdown").disabled = false;
}
//creates audio play and stop function and defines a parameter for when to start and stop audio
function myPlay(stopOrStart =0) {
  if(stopOrStart ==0)
  {
  audio = new Audio("countdownaudio.wav");
  audio.play();
}
  else if( stopOrStart ==1)
  {
  audio.pause();
  }
}

{//Shows what will be written in the alert pop up
  //variable made from data in URL
  var params = new URLSearchParams(document.location.search);
  //Identifies firsName as letter f in URL
  var firstName = decodeURIComponent(params.get("f"));
  //auto capitalizes first lettet in firstName
  firstName = firstName[0].toUpperCase() + firstName.substring(1);
  //Identifies lastName as letter l in URL
  var lastName = decodeURIComponent(params.get("l"));
  //auto capitalizes first lettet in lastName
  lastName = lastName[0].toUpperCase() + lastName.substring(1);
  //Identifies badgeNum as letter b in URL
  var badgeNum = decodeURIComponent(params.get("b"));

  //alerts full name and badge number that was typed into fields of login page
alert("Welcome, "+firstName+" "+lastName+" Badge: "+badgeNum+" to the UAT Mission 3 Space Program Website");
//Funtion of countdown and start and stop buttons
var startButton = document.getElementById("startCountdown");
var downloadTimer = null;
//waits to run commands until the buttons are clicked on
startButton.addEventListener("click", function(){
  //calls to disablefirstbutton function
  disablefirstbutton();
  //sets a delay of 510ms until functions activates
  setTimeout(function(){
    myPlay(0);
  },510);
  //starting number of countdown and that it is time left
  var timeleft = 10;
downloadTimer = setInterval(function(){
  console.log(timeleft);
  //hides gif when start button is pressed
  if(timeleft > 0){
    document.getElementById("rocket").style.display="none";
  }
  //number to stop countdown at
  if(timeleft <= 0){
    disablesecondbutton();
    clearInterval(downloadTimer);
    //adds id countdown and what text and gif to display during and after countdown ends
    document.getElementById("countdown").innerHTML = "BLAST OFF";
    document.getElementById("rocket").style.display="block";
  }
  //checks if countdown is above 0 and below 5 and if statement is true then it will display text
  else if((timeleft > 0) && (timeleft < 5 )){
    document.getElementById("countdown").innerHTML = "Warning Less than ½ way to launch, time left = " + timeleft;
  }
  else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds";
  }
  timeleft -= 1;
}, 1000);
});
//to stop countdown and display text that countdown has been stopped 
var stopButton = document.getElementById("endCountdown");
stopButton.onclick = function(){
  //calls my play function to stop audio
  myPlay(1);
disablesecondbutton();
//referencing id for stop button function
document.getElementById("countdown").innerHTML = "Countdown stopped!";
clearInterval(downloadTimer);

}
}
