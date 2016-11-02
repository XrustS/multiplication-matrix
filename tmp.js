let matrix = [[1,2,3],[1,2,3]],
    str = '';

for(let i = 0; i < matrix.length; i++){
  for(let j = 0; j < matrix[i].length; j++){
    str += matrix[i][j]+" -> ";
  }
  console.log(str);
  str ='';
}
