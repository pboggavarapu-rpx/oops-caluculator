$( document ).ready(function() {
	$('.num_sym').click(function(){
	  var screenVal = $("#screen").val();
	  var currentChar = $(this).text();
	  if(screenVal != "Infinity" && screenVal != "Error"){
	  	var lastChar = screenVal.substr(-1);
	  	if(/^[0-9]*$/.test(lastChar) == false){
	  		if(/^[0-9]*$/.test(currentChar) == true )
	        screenVal = screenVal+currentChar;
	  	}
	  	else
	  	  screenVal = screenVal+currentChar;
	  }
    else{
      screenVal = currentChar;
    }
    $("#screen").val(screenVal);
	});

	$('#reset').click(function(){
     $("#screen").val("");
	});

	$('#result').click(function(){
		try
		{
		  screenVal = eval($("#screen").val());
      $("#screen").val(screenVal);
		}
		catch(e)
		{
		  $("#screen").val('Error');
		}
	});
});

