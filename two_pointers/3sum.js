/*
Neetcode problem for 3sum
*/

const nums = [-1,0,1,2,-1,4]

const threeSum = (arr) => {

  arr.sort((a,b)=>a-b);
  let array = [];
  let target;
  for (let i=0;i<arr.length-2;i++) {
    
    let left = i+1;
    let right = arr.length-1;
    if (nums[i] === target) {
      continue;
    }
    target = -nums[i];

    while (left<right) {
      if (nums[left]+nums[right]>target) {
        right--;
      } else if (nums[left]+nums[right]<target) {
        left++;
      } else {
        array.push([-target, nums[left],nums[right]]);
        left++;
        right--;
        while (left<right && (nums[left] === nums[left-1])) {
          left++;
        }
        while (left<right && (nums[right]=== nums[right+1])) {
          right--;
        }
      }
    }
    return array;
  }
}

console.log(threeSum(nums));
