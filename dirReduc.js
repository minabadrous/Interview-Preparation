// 
// 
// Directions reduction
// Nulls away opposite directions to leave only the essential
// solution 1
function dirReduc(arr){
    var val = ''
    var check = ['southnorth','northsouth','eastwest','westeast']
    var rp = 0;
  
    while(rp !== 2){
      for (var i=arr.length; i>=0; i--){
        if(check.includes((arr[i] + val).toLowerCase())){
          val = ''
          arr.splice(i ,2)
        }
        else val = arr[i]
      }
      rp++;
    }
    return arr
  }