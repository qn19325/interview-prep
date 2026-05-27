"use strict";
function search(nums, target) {
    let i = 0;
    let j = nums.length - 1;
    while (i <= j) {
        const mid = Math.floor((i + j) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] < target) {
            i = mid + 1;
        }
        else {
            j = mid - 1;
        }
    }
    return -1;
}
;
console.log(search([-1, 0, 3, 5, 9, 12], 2));
