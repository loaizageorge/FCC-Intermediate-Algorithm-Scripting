// INCORRECT ANSWER, INVOLVES LOOPING OVER 1M TIMES, WORKS BUT ISNT PRACTICAL AT ALL
function smallestCommons(arr) {

  var rangeOfNums = [];
  var start;
  var end;
  if(arr[0] < arr[1]){
  	start = arr[0];
    end = arr[1];
  } else{
  	start = arr[1];
    end = arr[0];
  }
  for(var i = start; i <= end;  i++){
  	rangeOfNums.push(i);
  }
  console.log(rangeOfNums);
  //noprotect
  for(var j = rangeOfNums[0]; j < 6056821; j++){
  	var commonMultiple = 0;
    	for(var g = 0; g <= rangeOfNums.length; g ++){
      	if( j % rangeOfNums[g] === 0){
       	//	console.log(j + ' is a multiple of: ' + rangeOfNums[g]);
        	commonMultiple++;
        }
      }
      if(commonMultiple == rangeOfNums.length){
      	return j;
      }
  }	
  
}


smallestCommons([1,5]);
