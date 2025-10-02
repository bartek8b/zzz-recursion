function mergeSort(input) {
  const half = input.length / 2;
  const left = input.slice(0, half);
  const right = input.slice(half, input.length);

  console.log(left);
  console.log(right);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
