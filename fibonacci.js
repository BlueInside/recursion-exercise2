function fibs(num = 0) {
  let result = [0, 1];
  if (num <= 0) return [];
  if (num === 1) return result[0];
  for (let index = 2; index < num; index++) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return result;
}

function fibsRec(num = 0, result = [0, 1]) {
  if (result.length >= num) return result;
  else {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return fibsRec(num, result);
}
