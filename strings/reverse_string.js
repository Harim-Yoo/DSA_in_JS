/*
Given a string, turn the string around
*/

// Use for statement
const reverseString = (str) => {
  let str_arr = [...str];
  let res_str = [];
  for (let i=str.length-1;i>=0;i--) {
    res_str.push(str_arr[i]);
  } 
  return res_str.join("");
}

// Use stack method
const reverseString2 = (str) => {
  let stack = [];
  for (let char of str) {
    stack.push(char);
  }

  let res = [];
  while (stack.length > 0) {
    res.push(stack.pop());
  }
  return res.join("");
}

// Use reverse method
const reverseString3 = (str) => {
  return [...str].reverse().join("");
}
