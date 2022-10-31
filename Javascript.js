{//Shows what will be written in the alert pop up
alert("Welcome to the UAT Mission 3 Space program Website");
//Funtion of countdown and start and stop buttons
var startButton = document.getElementById("startCountdown");
var downloadTimer = null;
//waits to run commands until the buttons are clicked on
startButton.addEventListener("click", function(){
  //starting number of countdown and that it is time left
  var timeleft = 10;
downloadTimer = setInterval(function(){
  console.log(timeleft);
  if(timeleft > 0){
    document.getElementById("rocket").style.display="none";
  }
  //number to stop countdown at
  if((timeleft > 0) && (timeleft < 5 )){
    document.getElementById("countdown").innerHTML = "Warning Less than ½ way to launch, time left = " + timeleft;
  }
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    //adds id countdown and what text and gif to display during and after countdown ends
    document.getElementById("countdown").innerHTML = "BLAST OFF";
    document.getElementById("rocket").style.display="block";
  }
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
//referencing id for stop button function
document.getElementById("countdown").innerHTML = "Countdown stopped!";
clearInterval(downloadTimer);

}
}