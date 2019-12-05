/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let result = [];
    var map = new Map;

    nums.forEach(function (n) {
        if (map.get(n)) {
            map.set(n, map.get(n) + 1);
        }
        map.set(n, 1);
    });
    nums = Array.from(new Set(nums.sort()));
    var finalNumber = nums[nums.length - 1];
    for (let i = nums[0]; i <= finalNumber; i++) {
        if (map.get(i) == null) {
            result.push(i);
        }
    }

    return result;

};
//1,2,3,4,7,8 
console.log(findDisappearedNumbers([25,34]));