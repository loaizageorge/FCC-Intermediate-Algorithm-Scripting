
function sumPrimes(num) {
  var sum = 0;
  // Loop through all numbers up to num starting at 2, since 0 and 1 aren't prime numbers, we can skip them.
    for(var i = 2; i <= num; i++){
    // factors increases each time a number is divisible ( using modulus check for no remainders )
  	  var factors = 0;
    // Check for factors/ numbers that are divisble by the current number by looping through 
    // all numbers up to num
  		  for( var j = 1; j <=num; j++){
        if( i % j === 0){
        	factors++;
        }     
    }
    	if(factors < 3){
      // Prime numbers are only divisble by themselves and 1, so any number with only 2 factors are prime.
        	sum = sum + i;      
      }
  }
 return sum;
}

sumPrimes(977); // 73156
