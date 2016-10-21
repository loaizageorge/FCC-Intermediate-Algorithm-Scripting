
function findElement(arr, func) {
  return arr.filter(func)[0];
  // Filter is a higher order function, a function that operates on other functions. They either take a function as an argument,
  // or even return a function. Filter is a built in function that can be used on an array, and it abstracts the logic
  // If we were to actually peek at the function delcaration, it would would look similar to this:
  // function filter(array, test){
  //  var passed = [];
  //  for ( var i = 0; i < array.length; i++){
  //    if(test(array[i])){
  //      passed.push(array[i]);
  //    }  
  //  }
  //  return passed;
  //}
  // An array containing all values that met the conditions set in the function named test, it would exist in the returned array.
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }); // 2
