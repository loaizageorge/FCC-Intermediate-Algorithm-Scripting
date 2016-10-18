function myReplace(str, before, after) {

// Take first character of string to be changed and test if it's upper/lower case.
// We do this because we need to keep the case in the string that will be replacing it.

  var holdChar = before.charAt(0);
  var result;
    if(holdChar == holdChar.toUpperCase()){
 // It is higher, replace first char in after to uppercase. 
 
      var upperCaseLetter = after.charAt(0).toUpperCase();
      result = after.replace(after.charAt(0),upperCaseLetter);
      }else{
      // It is lower, replace first char in after to lowercase. 
      
        var lowerCaseLetter = after.charAt(0).toLowerCase();
        result = after.replace(after.charAt(0),lowerCaseLetter);
      }
      // Replace the changed after (stored in result) with the string to be replaced, after.
      return str.replace(before,result);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
