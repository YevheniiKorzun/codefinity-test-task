const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputInt;

rl.question('Enter a number: ', (value) => {
  inputInt = value;

  rl.close();
});

const resultArr = [];

rl.on('close', () => {
  for (let i = 0; i <= inputInt; i++) {
    const resultArrItem = getFizzBuzzStringFromInteger(i);

    resultArr.push(resultArrItem);
  }

  console.log(resultArr);

  process.exit(0);
});

function getFizzBuzzStringFromInteger(n) {
  let result = '';

  if (n % 3 === 0) {
    result += 'Fizz';
  }

  if (n % 5 === 0) {
    result += 'Buzz';
  }

  if (!result) {
    result = `${n}`;
  }

  return result;
}
