var calculator = {
    '+': function(a, b) {
        return a + b;
    },

    '-': function(a, b) {
        return a - b;
    },

    '*': function(a, b) {
        return a * b;
    },

    '/': function(a, b) {
        return a / b;
    },

    '%': function(a, b) {
        return a / b;
    },

    calc: function(a, b, op) {
        if (this[op] === undefined) {
            console.log("Unknown operation!!");
            return undefined;
        }
        return this[op](parseFloat(a), parseFloat(b));
    }
};

function inputString(inputVal){
	var screen = document.getElementById("screen");
  var screenVal = screen.value
  var currentChar = inputVal;
  if(screenVal != "Infinity" && screenVal != "Error" && screenVal != "NaN"){
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
  screen.value = screenVal;
}

function reset(){
  document.getElementById("screen").value="";
}

function result(){
	var screen = document.getElementById("screen");
	var regex = /[+,-,*,%,\/,-]/gi, indices = [], result="";
	var screenVal = screen.value;
	try
	{
		while ( (searchPos = regex.exec(screenVal)) ) {
			if(searchPos.index != 0)
		    indices.push(searchPos.index);
    }

    for (i = 0; i < indices.length; i += 1) {
    	symb = screenVal.charAt(indices[i])
      if(result==""){
        result = screenVal.substring(0, indices[i]);
      }
      next = screenVal.substring(indices[i]+1, indices[i+1]);
      console.log(result)
      console.log(next)
      console.log(symb)
      result = calculator.calc(result, next, symb);
      console.log(result)
      console.log("-----------")
    }

    screen.value = parseFloat(result);
	}
	catch(e)
	{
	  screen.value = 'Error';
	}
}
