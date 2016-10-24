// noprotect

function binaryAgent(str) {
// An array to store the translated characters
// another to store the binary string
 var translatedString = [];
 var translateChar = [];
for(var i =0; i<=str.length; i++){
//  iterate thtrough the string, if the character is a character (not a space ' ') then push
// to the translateChar Array.
// If it is a space, join the chars in translateChar to a single string, convert to a decimal number, and push
// the resulting character from String.fromCharCode to the translatedString array.
// Empty translateChar and continue iteration.

  if(str.charAt(i) == ' ' || i == str.length){
    var binary = translateChar.join('');
    translateChar = [];
    var sum = 0;
      for(var j = 0; j < binary; j ++){
          var power = 7 - j;
          var number = binary.charAt(j);
          sum = sum + (Math.pow(2,power) * number);
      }
  translatedString.push(String.fromCharCode(sum));
} else{
    translateChar.push(str.charAt(i));
  }
}
return translatedString.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
// Aren't bonfires fun!?
