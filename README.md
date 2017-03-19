Practice of Leetcode(Implement by JS)

1. [Two Sum](https://leetcode.com/problems/two-sum/#/description)
We can implement the function by Map. 
The 'key' in map stored the value of (target - nums[i]), it means another value we are looking forword to achieve target with current number.
The 'val' in map stored the index of current number, if current number achieved target in future, we can get its index by 'val'.
For each numbers in arr, first we check if it meet demand by ```if(targetMap.has(num))```.
Expression return true means the 'num' is the wanted, then we can return array [targetMap.get(nums[i]), i].
If expression return false, we need store (target - nums[i], i) in targeMap to search if next value can meet the demand with numbers in our targetMap.
