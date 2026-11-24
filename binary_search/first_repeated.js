/*
Given an array and the target, find the first index in the array when the target appears. If not, return -1
*/

const arr = [1,3,3,3,6,10,10,10,100];
target = 3;

const findFirst = (arr,target) => {
  let left = 0;
  let right = arr.length -1;

  let targetId = -1;

  while (left <= right) {
    let mid = Math.floor((left+right)/2);

    if (arr[mid] == target) {
      targetId = mid;
      right = mid - 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return targetId;
}

console.log(findFirst(arr,target)); // expect 1.