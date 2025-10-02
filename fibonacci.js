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
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  else {
    const output = fibsRec(n - 1);
    output.push(output[output.length - 1] + output[output.length - 2]);
    return output;
  }
}

console.log(fibsRec(8));
