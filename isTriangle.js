// 
// 
// Is This a Triangle
// Validates, second to the sides length, if this can be a triangle
// 1st solution
const isTriangle = (a,b,c) => {
    var max = Math.max(a,b,c)
    return max < [a,b,c].reduce((a,b) => a+b) - max
  }
  // 2nd solution
  const isTriangleTwo = (a,b,c) => a+b>c && a+c>b && c+b>a ? true : false