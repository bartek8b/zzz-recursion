function fibs(n) {
  const output = [];
  for (let i = 0; i < n; i++) {
    i === 0 || i === 1
      ? output.push(i)
      : output.push(output[i - 1] + output[i - 2]);
  }
  return output;
}

console.log(fibs(8));

function fibsRec(n) {
  if (n === 0) return [];
  if (n === 1) return [n - 1];
  if (n === 2) return [n - 2, n - 1];
  }
  

console.log(fibsRec(2));
