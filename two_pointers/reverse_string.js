/*
reversing string using two pointer;
*/

const TwoPointerRevStr = (str) => {
  let result = [...str];
  let start = 0;
  let end = result.length - 1;

  while (start<end) {
    const temp = result[end];
    result[end] = result[start];
    result[start] = temp;
    /*
    [result[start],result[end]] = [result[end],result[start]];
    */
    start ++;
    end --;
  }
  return result.join("");
}
console.log(TwoPointerRevStr("abc"));