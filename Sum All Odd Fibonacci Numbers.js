function sumFib(num){
// Fill the array with the 0 and 1 so you have a previous number to add to the current number,
// the last entry in the array. This allows to do [i-1] + [i] for all values without running into
// problems at the beginning, and doesn't affect the total sums because 0 doesn't add any value to the total.
	var fibSeq = [0,1];
  var total = 0;
  var i = 1;
  while( fibSeq[i] <= num ){
  	var sum = fibSeq[i-1] + fibSeq[i]
    fibSeq.push(sum);
    if( fibSeq[i] % 2 !==0){
    // Only add the current number to the total if it is odd
      total = total + fibSeq[i];
    }
    i++;
  }
    return total;
}
  
sumFib(1000); //1785
