const leftCheck = (levels, len) => {
  const left = [];
  for (let i = 0; i < len; i++) {
    left.push(i);
  }
  left[0] = levels[0];

  for (let i = 0; i < len - 1; i++) {
    if (levels[i] > left[i]) {
      left[i] = levels[i];
    }
    left[i + 1] = left[i];
  }
  return left;
};

const rightCheck = (levels, len) => {
  const right = [];
  for (let i = 0; i < len; i++) {
    right.push(i);
  }
  right[len - 1] = levels[len - 1];

  for (let i = len - 1; i > 0; i--) {
    if (levels[i] > right[i]) {
      right[i] = levels[i];
    }
    right[i - 1] = right[i];
  }
  return right;
};

const loadGrain = (levels) => {
  let result = 0;
  const len = levels.length;

  if (len < 3) return 0;

  for (let i = 0; i < len; i++) {
    const r = rightCheck(levels, len);
    const l = leftCheck(levels, len);
    let addToResult = Math.min(r[i], l[i]) - levels[i];
    if (addToResult > 0) {
      result += addToResult;
    }
  }
  return result;
};

console.log(
  `The amount of maximum addition of grain is: ${loadGrain([4, 1, 3])}`
);
console.log(
  `The amount of maximum addition of grain is: ${loadGrain([
    2, 1, 5, 2, 7, 4, 10,
  ])}`
);
console.log(
  `The amount of maximum addition of grain is: ${loadGrain([2, 0, 1, 5, 2, 7])}`
);
console.log(
  `The amount of maximum addition of grain is: ${loadGrain([2, 4, 2])}`
);
console.log(`The amount of maximum addition of grain is: ${loadGrain([7, 4])}`);
console.log(`The amount of maximum addition of grain is: ${loadGrain([])}`);
