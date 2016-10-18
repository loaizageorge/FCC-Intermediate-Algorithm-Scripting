
function pairElement(str) {
  var sequence = [];
  // For each strand (A,G,C,T), add in the corresponding strand to make a base pair. (AT,GC)
  // Answer should be in the form of a 2D array ([['A','T'],['C','G'],['G','C']...])
  for(var i = 0; i<str.length; i++){
  var pair = [];
  
  	switch(str[i]){
    	case 'G':
      	pair.push('G');
        pair.push('C');
        sequence.push(pair);
        break;
      case 'C':
      	pair.push('C');
        pair.push('G');
        sequence.push(pair);
        break;
      case 'A':
      	pair.push('A');
        pair.push('T');
        sequence.push(pair);
        break;
      case 'T':
      	pair.push('T');
        pair.push('A');
        sequence.push(pair);
        break;
    }
  }
  return sequence;
}

pairElement("GCG");
