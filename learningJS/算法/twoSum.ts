/**
 * @description: 两数之和 for循环暴力
 * @event:
 * @param {number} nums
 * @param {number} target
 * @return {*}
 */
function twoSum(nums: number[], target: number): number[] {
  const len: number = nums.length;
  //i等于Nums的最后一个
  for (let i: number = 0; i < len - 1; i++) {
    for (let j: number = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}
const nums: number[] = [2, 7, 5, 11, 8, 6, 22];
console.log(twoSum(nums, 9));
