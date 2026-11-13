let list = [1,2,3,4,5];
const target = 7;

function findPairSum(list,target) {
  let left = 0; // left-pointer
  let right = list.length-1; // right-pointer
  while (left < right) {
    const currentSum = list[left] + list[right];
    
    
    if (currentSum == target) {
      return [left,right]
    } else if (currentSum < target) {
      left ++;
    } else if (currentSum > target) {
      right --;
    }
  }
}

console.log(findPairSum(list,target));