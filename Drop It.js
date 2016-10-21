function dropElements(arr, func) {
  // Took the logic from the filter loop, and made it so once the condition is met
  // the loop is broken with break and what remained in the array as well as the item that 
  // satisfied the condition are returned.
  	for(var i = 0; i < arr.length; i++){
    	if(func(arr[i])){
      	return arr.slice(i);
      }
    }
    // If the entire array has been iterated without any of the values meeting the condition
    // an empty array is returned
    return [];
}

dropElements([1, 2,3,4], function(n) {return n >5; });
