const array = ['1','2','+'];

const ReversePolish = (target) => {
  let array = [];
  let result;
  for (let char of target) {
    if (char !== '+') {
      array.push(char);
    } else {
      let second = Number(array.pop());
      let first = Number(array.pop());
      result = first + second;
      array.push(result);
    }
  }
  return array[0];
}

console.log(ReversePolish(array));