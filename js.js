$(document).ready(function() {
	
	var counter;

	function show_prompt()
	{
		var numb=prompt("Enter an Integer");
		return numb;
	}

	counter = show_prompt();
	console.log(counter);

	function checknum(checkme){
		if(checkme % 1 == 0){

			parseInt(checkme);
			if (checkme > 0) {
				console.log(checkme);
			}
			else{
				alert("Valid an Integer not entered please reload page.")
			}
		}
		else{
			alert("Valid an Integer not entered please reload page.")
		}
	}

	checknum(counter);

	function fizzbuzz(userNum){
		for (var i = 1; i <= userNum; i++) {
			if(i % 3 == 0){
				if(i % 5 == 0){
					$(".fb").append("<li>fizzbuzz</li>");
					("fizzbuzz");
				}
				else{
					$(".fb").append("<li>fizz</li>");
					console.log("fizz");
				}
			}
			else if(i % 5 ==0){
				$(".fb").append("<li>buzz</li>");
				console.log("buzz");
			}
			else{
				$(".fb").append("<li>" + i + "</li>");
			console.log(i);
			}
		}
	}

	fizzbuzz(counter);

});