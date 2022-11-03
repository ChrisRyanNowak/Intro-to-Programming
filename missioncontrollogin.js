//creates a funtion
function checkCreds()
{   //creates variables used in function
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var badgeNum = document.getElementById("badgeNum").value;
    //adds two variables to create one 
    var fullName = firstName + " " + lastName;
    //tests if the first and last name together are more than 2 letters and less than 20 
    if (fullName.length > 20 || fullName.length < 2)
        {
        //if lenth is less than 2 or more that 20 it will show this text
        document.getElementById("loginStatus").innerHTML = "Invalid Number of Characters in Name"
        }
    //tests that the badge number is exactly 3 digits long  
    else if (badgeNum.length != 3 )
        {
        //if lenth is less than 3 or more that 3 it will show this text
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number (must be 3 digits)"
        }    
    //if both the badge number and the full name are within the set parameters that is executes an alert and loads the referenced html
    else
    {   //encodes variables in url to be referenced in other pages
        firstName = encodeURIComponent(firstName);
        lastName = encodeURIComponent(lastName);

        alert("Access Granted")
        //sets url of the page loaded to if parameters are correct and gives what the variables are encoded as in URL
        location.href="first.html?f="+firstName+"&l="+lastName+"&b="+badgeNum;
    }

}