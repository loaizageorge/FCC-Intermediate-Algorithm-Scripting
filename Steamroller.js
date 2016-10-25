function steamrollArray(arr){
	var flatArr = [];
  
  flatten(arr);
  
  function flatten(array){ // Use recursion to go through the items in the array one by one
  	for( var i = 0; i < array.length; i++){
    	if(Array.isArray(array[i])){ // If item is an array, call the function on it
      	flatten(array[i]);
      } else{
      	flatArr.push(array[i]); // If item isnt array, push it to the designated array
      }	
    }
  }
  return flatArr;
}

steamrollArray([1, [2], [3, [[4]]]]);

// Resources
//https://www.gorkahernandez.com/blog/steamroller-free-code-camp/
