var a$ = 100 + "18";
// setTimeout(wakeUpUser, 5000);
function wakeUpUser()
{
	alert("Will u stare forever?");
}
function myFunction() {
    var word = "bottles";
    var count = 99;
    while(count > 0)
    {
    	console.log(count + " " + word + " of beer on the wall");
    	console.log(count + " " + word + " of beer, ");
    	console.log("Take one down");
    	count--;
    	if (count > 0)
    	{
    		console.log(count + " " + word + " of beer on the wall");
    	}
    	else
    	{
    		console.log("No more " + word + " of beer on the wall");
    	}
    }
}
console.log("Hello");	