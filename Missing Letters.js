
function fearNotLetter(str) {
   for(var i = 0; i<str.length; i++){
 
  	if(i === 0){
    // Do nothing on the first loop, as you need to subtract from previous char code
    
    } else {
    // Since char codes are in numberical order ('a' = 97, b = 98, 'c' = 99...)
    // A difference between the current character and the previous one should be 1
    // If not, there is a missing letter, which can be retrieved by adding 1 to the char code of the previous
    // character, or subracting 1 from the char code of the current character.
    	var sum = str.charCodeAt(i) - str.charCodeAt(i-1);
      if(sum !=1){
      	var store = str.charCodeAt(i-1);
        store +=1;
        return String.fromCharCode(store);
      } 
    }
  }
}

fearNotLetter("abce");
