// 
// 
// Array.diff , substract array from another
// 1st solution
const arrayDiff = (a, b) => {
    b.map(x => {
      for(var i=a.length; i>=0; i--){
        if( a[i] == x ) a.splice(i,1)
      }
    })
    return a
  }
  // 2nd solution
  const arrayDiff = (a, b) => a.filter(x => !b.includes(x))