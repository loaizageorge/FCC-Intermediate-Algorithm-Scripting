function addTogether() {
	if( arguments.length === 1 && typeof(arguments[0]) === 'number'){ 
  // If there is only one input and it is a number return a function
  // Store the argument so it doesn't stay behind when a new scope is created
  	var x = arguments[0];
    return function(y){
    // returns a function that uses the next argument from addTogether
    	if (typeof(y) === 'number'){
      	return x + y;
      };
    }
  } else if(typeof(arguments[0]) === 'number' && typeof(arguments[1]) === 'number'){
  	return arguments[0] + arguments[1];
  }
	
}

addTogether(2,3);
