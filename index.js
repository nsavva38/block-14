// get the length of the array
const getLength = (array) => {
  return array.length;
}

// get the sum of the array
const getSum = (array) => {
  sum = 0

  for(i=0; i < array.length; i++){
    sum = sum + array[i];
  }
  
  return sum;
}

// get the mean of the array
const getMean = (array) => {
  total = getSum(array);
  
  return total/array.length;
}

// get the minimum of the array
const getMin = (array) => {
  minimum = array[0];

  for(i=0; i < array.length; i++) {
    if (minimum > array[i]) {
      minimum = array[i];
    }
  }

  return minimum;
}

// get the maximum of the array
const getMax = (array) => {
  maximum = array[0];

  for (i=0; i < array.length; i++) {
    if (maximum < array[i]) {
      maximum = array[i];
    }
  }

  return maximum;
}

// get the range of the max and min
const getRange = (array) => {
  minimum = getMin(array);
  maximum = getMax(array);

  return maximum - minimum;
}

// get the even numbers of the array
const getEvens = (array) => {
  let evenArray =[];
  for (i = 0; i < array.length; i++) {
    if (array[i]%2 === 0) {
      evenArray.push(array[i]);
    }
  }

  return evenArray;
}

// get the odd numbers of the array
const getOdds = (array) => {
  let oddArray =[];
  for (i = 0; i < array.length; i++) {
    if (array[i]%2 !== 0) {
      oddArray.push(array[i]);
    }
  }

  return oddArray;
}


const input = prompt(`Enter numbers seperated by commas: `)

const stringArray = input.split(`,`);

let numbArray = [];

for(i=0; i < stringArray.length; i++){
  numbArray.push(Number(stringArray[i]));
}

console.log(`the array: ${numbArray}`);
console.log(`length: ${getLength(numbArray)}`);
console.log(`sum: ${getSum(numbArray)}`);
console.log(`mean: ${getMean(numbArray)}`);
console.log(`minimum: ${getMin(numbArray)}`);
console.log(`maximum: ${getMax(numbArray)}`);
console.log(`range: ${getRange(numbArray)}`);
console.log(`evens: ${getEvens(numbArray)}`);
console.log(`odd: ${getOdds(numbArray)}`);

