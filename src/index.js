module.exports = function towelSort (matrix) {
    if (arguments.length < 1 || matrix.length === 0) return [];
    let Arr = [];
    for (let a = 0; a < matrix.length; a++) {
      if (a % 2 !== 0) matrix[a] = matrix[a].reverse();
      for (let k = 0; k < matrix[a].length; k++) {
        Arr.push(matrix[a][k]);
      }
    }
    return Arr;
  };
