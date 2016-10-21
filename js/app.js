$(document).ready( function() {

	var operationPending = false;
	var operation = "";
	var numberOne = 0;
	var numberTwo = 0;
	var numberOneSet = false;
	var numberTwoSet = false;

	var finishedPrevCalc = false;

	resetCalculator();


	function resetCalculator(number) { 

	    $(".display").val(number);
	    numberOne = number;
	    numberTwo = 0;
	    numberOneSet = false;
	    numberTwoSet = false;

	    operationPending = false;
	    operation = "";

	    finishedPrevCalc = false;

	    $('.operation-button').removeClass('pending');
	}


	$('.num-button').click( function() {
		if (finishedPrevCalc) {
			resetCalculator($(this).text());
		} else {

			if (operationPending && !numberOneSet) {

				numberOne = $('.display').val();
				numberOneSet = true;

				$('.display').val($(this).text());
				numberTwo = $('.display').val();


			} else if (operationPending && numberOneSet) { 
  
		        var number = $(".display").val(); 
		        var toAppend = $(this).text(); 
		  
		        var newNumber = number + "" + toAppend; 
		  
		        $(".display").val(newNumber); 
		      
		       	numberTwo = $("#display").val();
				numberTwoSet = true;
				
			} else {

				var number = $(".display").val(); 
		        
		        if (number == "0") { 
		            number = ""; 
		        } 
		  
		        var toAppend = $(this).text(); 
		  
		        var newNumber = number + "" + toAppend; 
		  
		        $(".display").val(newNumber);
		        numberTwoSet = true; 
			}
		}
	});

	$('.operation-button').click( function() {
		if (finishedPrevCalc) {
			resetCalculator($('.display').val());
			numberOneSet = false;
			finishedPrevCalc = false;
		}

		$(".operation-button").removeClass("pending"); 
    	$(this).addClass("pending"); 

    	operation = $(this).text();
    	operationPending = true;

	})

	$('.equal-button').click( function() {
		if (numberOneSet && numberTwoSet) {
			switch(operation) {
				case "+":
					var number = parseFloat(numberOne) + parseFloat(numberTwo);
					break;
				case "-":
					var number = parseFloat(numberOne) - parseFloat(numberTwo);
					break;
				case "x":
					var number = parseFloat(numberOne) * parseFloat(numberTwo);
					break;
				case "%":
					var number = parseFloat(numberOne) / parseFloat(numberTwo);
					break;

			}
			
			resetCalculator(number);
			finishedPrevCalc = true;
		}
	});

	$('.clear').click( function() {
		resetCalculator("0");
	});


})