function mergeSort(list) {
  if (list.length <= 1) {
    return list;
  }
  let left = [];
  let right = [];
  list.forEach((element, index) => {
    if (index < list.length / 2) left.push(element);
    else right.push(element);
  });
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right);
}

function merge(left = [], right = []) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i <= left.length - 1 && j <= right.length - 1) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else result.push(right[j++]);
  }
  if (i <= left.length - 1) {
    result = result.concat(left.slice(i));
  }
  if (j <= right.length - 1) {
    result = result.concat(right.slice(j));
  }
  return result;
}
