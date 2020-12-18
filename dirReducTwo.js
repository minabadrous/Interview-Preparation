// 
// Solution 2
// 
const dirReducTwo = (arr) => {
    var patt = /NORTHSOUTH|SOUTHNORTH|EASTWEST|WESTEAST/, str = arr.join('');
    while( patt.test(str) ) str = str.replace(patt, '')
    return str.match(/NORTH|SOUTH|EAST|WEST/g) || []
  }