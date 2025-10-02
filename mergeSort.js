function mergeSort(input) {
  if (input.length <= 1) {
    return input;
  }
  if (input.length > 1) {
    const half = Math.floor(input.length / 2);
    const left = input.slice(0, half);
    const right = input.slice(half, input.length);

    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(l, r) {
    let i = 0;
    let j = 0;
    let k = 0;
    let output = [];

    while (i < l.length && j < r.length) {
      if (l[i] < r[j]) {
        // Can be: output[k++] = l[i++]; but written like below for better understanding
        output[k] = l[i];
        i++;
      } else {
        // Can be: output[k++] = r[j++];
        output[k] = r[j];
        j++;
      }
      // Can be skipped if 2 above comments are implemented
      k++;
    }
    for (; i < l.length; i++) {
      output[k++] = l[i];
    }
    for (; j < r.length; j++) {
      output[k++] = r[j];
    }
    return output;
  }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
