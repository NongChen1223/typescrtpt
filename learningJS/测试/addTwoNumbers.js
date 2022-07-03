/*
 * @Author: NongChen 2584533077@qq.com
 * @Date: 2022-07-03 21:44:08
 * @LastEditors: NongChen 2584533077@qq.com
 * @LastEditTime: 2022-07-03 21:51:02
 * @FilePath: \typescrtpt\learningJS\测试\addTwoNumbers.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function addTwoNumbers(l1, l2) {
     const reverseList = (arr) => arr.reverse()
     const addsum = (arr) => {
          let a = ''
          arr.forEach((res) => {
               a += res
          })
          return +a
     }
     const a1 = reverseList(l1)
     const a2 = reverseList(l2)
     const totla = addsum(a1) + addsum(a2)
     const listNums = (arr) => {
          let nums = []
          let stringArr = arr + ''
          for (let num of stringArr) {
               nums.push(num)
          }
          return reverseList(nums)
     }
     console.log('返回结果', listNums(totla))
     return listNums(totla)
}
const l1 = [2, 4, 3]
const l2 = [5, 6, 4]
addTwoNumbers(l1, l2)
