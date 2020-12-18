// 
// 
// Bulid christmat tree
// 
const treeBuilder = (f) =>
  new Array(f).fill('')
  .map( (a,i) => a = ' '.repeat(f-i-1) + '*'.repeat(1 + (i*2)) + ' '.repeat(f-i-1) )
  .join('\n')