const nums: number[] = [2, 7, 5, 11, 8, 6, 22]
/**
 * @description: 两数之和 for循环暴力
 * @event:
 * @param {number} nums
 * @param {number} target
 * @return {*}
 */
function twoSumFor(nums: number[], target: number): number[] {
    const len: number = nums.length
    //i等于Nums的最后一个
    for (let i: number = 0; i < len - 1; i++) {
        for (let j: number = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return [-1, -1]
}
/**
 * @description: 哈希表查找两数之和的结果
 * @param {number} nums
 * @param {number} target
 * @return {*}
 */
function twoSumHash(nums: number[], target: number): number[] {
    const len: number = nums.length
    const map: Map<number, any> = new Map()
    for (let i: number = 0; i < len; i++) {
        const num = target - nums[i] //取差值
        if (map.has(num)) {
            //是否存在差值 map.has 返回一个布尔 查看某个键是否在map当中
            return [map.get(num), i] //如果存在返回之前差值的下标与这次的下标 map.get()方法 获得key对应的键值
        }
        map.set(nums[i], i) //如果不存在 则存入map 对应下标值为键 下标为值
        console.log('不存在', i, map)
    }
    return []
}
console.log(twoSumHash([3, 2, 4], 6))

// con sole.log(twoSumFor(nums,9))
