function fibs(num = 0) {
  const num1 = 0;
  const num2 = 1;
  let result = [num1, num2];
  if (num <= 0) return [];
  if (num === 1) return [num1];
  for (let index = 2; index < num; index++) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return result;
}
