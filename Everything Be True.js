function truthCheck(collection, pre) {
  // Is everyone being true?
 var countTrue = 0;
  for (var i = 0; i < collection.length; i++){
  // Check if the item has the property as declared in the second argument.
  // Also it needs to have a real value in it, can't have falsy values in it.
 	if((collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])))  {
  	countTrue ++;
  }
 
 }
 // If all items in the collection are true, return true
  return collection.length == countTrue;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"},
{"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
