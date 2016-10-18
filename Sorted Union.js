function uniteUnique(arr) {
	var uniqueNumbers = [];
  // Loop through the entire array of arrays
  for( var i  = 0; i < arguments.length; i++){
  // loop through the individual arrays and use .includes
  // to check if they appear already in uniqueNumbers array
  // If it doesnt, push it to the array
  	for( var j = 0; j < arguments[i].length; j++){
    	if(uniqueNumbers.includes(arguments[i][j])){
      } else{
      	uniqueNumbers.push(arguments[i][j]);
      }
    }
  }
  return uniqueNumbers;
}

uniteUnique([1, 3, 2], [1,5], [2, 4]);
