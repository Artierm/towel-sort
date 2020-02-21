
// You should implement your task here.

module.exports = function towelSort (matrix) {
 
  if (matrix== undefined || matrix.length==0)
  {
    return [];
  }
  let  matrixSecond = [];

  for (let index = 0; index < matrix.length; index++) {
  if(index%2 == 1)
  {
    matrix[index].reverse();

  }
  matrixSecond.push(...matrix[index]);
    
  }
  return matrixSecond;
}

