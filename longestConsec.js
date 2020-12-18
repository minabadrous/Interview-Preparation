// 
// 
// Consecutive strings
// Finds the longest string concatented of k,(passed factor), number of consecutive words
// 
function longestConsec(words, k) {
    var val = 0, str = ''
    
    for(var i=0; i<words.length+1-k; i++){
      var l = words.slice(i,i+k).join('');
      if(l.length > val){ val = l.length; str = l;}
    }
    
    return k<=0 || k>words.length ? '' : str 
  }