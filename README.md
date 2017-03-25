Practice of [Leetcode](https://leetcode.com/problemset/algorithms/) (Implement by JS)

1. [Two Sum](https://leetcode.com/problems/two-sum/#/description)  
We can implement the function by Map.  
The 'key' in map stored the value of (target - nums[i]), it means another value we are looking forword to achieve target with current number.  
The 'val' in map stored the index of current number, if current number achieved target in future, we can get its index by 'val'.  
For each numbers in arr, first we check if it meet demand by ```if(targetMap.has(num))```.  
Expression return true means the 'num' is the wanted, then we can return array [targetMap.get(nums[i]), i].  
If expression return false, we need store (target - nums[i], i) in targeMap to search if next value can meet the demand with numbers in our targetMap.  

2. [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/#/description)  
There are two things we need to watch out:  
--Two lists' length may different.  
--Each index may create add carry after added.  
We can use a var ```needPlus``` indicate if add carry needed and init it to 0.  
Traversal two list, check if extra plus need to each sum, then push the result to array.  
Don't forget check ```needPlus``` again in the end.  

3. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/#/description)  
We can use an array to store current longest substring without repeat.  
The arr inited as [] at first, then go through the string.  
If the character in string don't exist in arr, store it.
Else store arr's current length if it's longer then before, and drop all elements in arr from 0 to x(the position where arr[x] equals the character), then push character into arr.  
Don't forget to compare arr's length with history longest length at last.  

4. [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/#/description)  
Change the question to find Kth number in two sorted array, try to write a function getKth(a, b, k).  
Compare a[k/2] and b[k/2](If k/2 > a.length then compare a[a.length - 1] and b[k/2]. Assume a.length is lower than b here)  
if a[k/2] == b[k/2], we can return a[k/2] or b[k/2] directly.
else if a[k/2] < b[k/2], it means a[0]~a[k/2 - 1] is all lower than b[k/2]~b[b.length - 1], so Kth must not in a[0]~a[k/2 - 1], we can continue find reminder nums -> getKth(a.slice(x), b, k - x), x equals k/2 or a.length.
If a[k/2] > b[k/2] is the same logic.  

5. [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/#/description)  
Assume each character in string as a center of palindromic substring, check longest pali str of them.  
We need consider two situations - longest string like "aba" and "abba".  

6. [ZigZag Conversion](https://leetcode.com/problems/zigzag-conversion/#/description)  
Just try to find pattern :
All main number space is 2 * (n - 1).
Besides that, center row(except first and last line) need add an extra space 2 * (n - i - 1).  

7. [Reverse Integer](https://leetcode.com/problems/reverse-integer/#/description)  
Use the reverse() of array - change type from number to string(String(xxx)), then change string to array(split(""))
It's like: ```String(Math.abs(x)).split("").reverse().join("");```
If result > Math.pow(2, 31) return 0.
If x > 0 return result, else return -result.  

8. [String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/#/solutions)  
Just don't forget MAX&MIN limit.  

9. [Palindrome Number](https://leetcode.com/problems/palindrome-number/#/description)  
Palindrome Number is a number that has the same value with its reverse, we can easily get the result by:  
```return String(x) == String(x).split("").reverse().join("");```