/*
 * @Author: NongChen 2584533077@qq.com
 * @Date: 2022-07-03 15:21:40
 * @LastEditors: NongChen 2584533077@qq.com
 * @LastEditTime: 2022-07-03 17:06:18
 * @FilePath: \typescrtpt\learningJS\算法\twoSum.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
console.log(twoSum(nums,9))

