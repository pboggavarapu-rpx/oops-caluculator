
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

	function CalObject(div_name){
	    this.div_name = div_name;
	    this.operatorOne = false;
	    this.firstVal;
	    this.operator;
	    this.screenBoard="";
	    this.demo="demo";

			this.reset = function(){
				debugger
			  document.getElementById(that.div_name).getElementsByClassName("screen")[0].value="";
			};
			this.inputString = function(){
				that.screenBoard = document.getElementById(that.div_name).getElementsByClassName("screen")[0];
			  var screenVal = that.screenBoard.value
			  var currentChar = event.target.value;
			  if(currentChar == "AC")
			  	that.reset();
			  else{
				  that.screenBoard.value = screenVal+currentChar;
			  }
			};
			this.result = function(){
				  that.screenBoard = this.parentElement.getElementsByClassName("screen")[0]
					var screenVal = that.screenBoard.value;
          console.log(that);
          debugger
					// try
					// {

				  	if(that.operatorOne == false && screenVal.length > 0){
							that.operator = event.target.value;
							if(that.operator == "="){
				        screenVal = that.firstVal;
							}
							else{
								that.operatorOne = true;
							  that.firstVal = screenVal;
							  that.screenBoard.value = "";
					    }
				    }
				    else if(screenVal >= 1){
				      console.log(that.firstVal);
				      console.log(screenVal);
				      console.log(that.operator);
				      if(that.operator != "="){
				        that.firstVal = calculator.calc(that.firstVal, screenVal, that.operator);
				      }

				      that.operatorOne = false;
				      that.operator = event.target.value;
				      console.log(that.firstVal);
				      console.log("-----------");

				      that.screenBoard.value = parseFloat(that.firstVal);
				    }
				    else{
				      that.operator = event.target.value;
				    }
			 //  }
				// catch(e)
				// {
				//   that.screenBoard.value = 'Error';
				// }
			};

			var that = this;

	    var __construct =function(){

			  var mainDiv = document.createElement('div');
			  mainDiv.className = 'page-body';
			  mainDiv.id = that.div_name;
			  var div = document.createElement('div');
			  div.className = 'screen-div';
			  div.innerHTML = '<h1>'+that.div_name+'</h1><input type="text" name="screen-box" class="screen" readonly>'
			  mainDiv.appendChild(div);
				document.getElementById('container').appendChild(mainDiv);
				//createNumBlock();
			    var div = document.createElement('div');
			    div.className = 'num-block';
		      nums = '';
		        nums = nums + '<button TYPE="button" VALUE="AC">AC</button>'
		        nums = nums + '<button TYPE="button" VALUE=".">.</button>'
		      for (i = 0; i <= 9; i += 1) {
		        nums = nums + '<button TYPE="button" VALUE="'+i+'">'+i+'</button>'
		      }
			    div.innerHTML = nums;
		      document.getElementById(that.div_name).appendChild(div);

				//createOperatorBlock();
			    var opDiv = document.createElement('div');
			    opDiv.className = 'operator-block';
		      operators = '';
		      ops = ['+','-','*','/','%','=']
		      for (i = 0; i < ops.length; i += 1) {
		        operators = operators + '<button TYPE="button" VALUE="'+ops[i]+'">'+ops[i]+'</button>'
		      }

			    opDiv.innerHTML = operators;

		      document.getElementById(that.div_name).appendChild(opDiv);
					document.getElementById(that.div_name).getElementsByClassName('num-block')[0].addEventListener("click", that.inputString);
					document.getElementById(that.div_name).getElementsByClassName('operator-block')[0].addEventListener("click", that.result);
			}();

	};


function createNewCaluculator(){
	calName = document.getElementById("cal-name").value;
	if(calName != ""){
	  var myNewObject = new CalObject(calName);
	}
	else
		alert("Please enter name.");
}