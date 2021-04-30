// first function
const mySum = (num01, num02) => {
  return num01 + num02;
};

// second function
const myAverage = (values) => {
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    total += values[i];
  }
  let avg = total / values.length;
  return avg;
};

//export default mySum;
export default myAverage;