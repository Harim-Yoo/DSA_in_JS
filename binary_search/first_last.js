/*
Given an array and the target, find the first index and last index of the target, if any, as an array. Otherwise, return [-1,-1].
*/

const getStart = (arr,target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left+right)/2);

    if (arr[mid] == target) {
      if (mid == 0 || arr[mid-1] < target) {
        return mid;
      } else {
        right = mid - 1;
      }
    } else if (median > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

const getEnd = (arr,target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left+right)/2)
    if (arr[mid] == target) {
      if (mid == arr.length - 1 || arr[mid+1]>target) {
        return mid;
      } else {
        left = mid + 1;
      }
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

const getResult = (arr,target) => {
  let leftEndpoint = getStart(arr,target);
  let rightEndpoint = getEnd(arr,target);
  return [leftEndpoint, rightEndpoint];
}

console.log(getResult([1,2,3,3,3,4,5],3)); // expect [2,4]