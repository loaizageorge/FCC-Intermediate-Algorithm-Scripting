function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  
  var holdKeys = Object.keys(source); // get all the key/s (property/s) from the source
  var numOfProps = holdKeys.length;   // used to check later
  
   for ( var i = 0; i < collection.length; i++){
  	// Iterate through all keys/props to see if they exist in the current collection item
    var numOfMatches = 0;
    for( var j = 0; j < numOfProps; j ++){
    // If the current collection has the property and its value is the same as the one from the source
    // Increment the counter by 1
    	if(collection[i].hasOwnProperty(holdKeys[j]) && ( collection[i][holdKeys[j]] == source[holdKeys[j]] ) ){
      	numOfMatches ++;
   
        if(numOfMatches == numOfProps){ // Self explanatory
        	arr.push(collection[i]);
        }
      }
    }
  }
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
