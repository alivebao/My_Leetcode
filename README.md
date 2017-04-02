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

10. [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/#/description)  
Solve it by DP.  
We can use a two-dimensional array result[i][j]:  
Initial:  
```
result[0][0] = true;  
for(var i = 0; i < p.length; i++){
	if(p[i] == '*'){
		result[0][i + 1] = result[0][i] || result[0][i - 1];
	}
}
```  
Then:  
If p[i] == s[j] || p[i] == '.': result[i][j] = result[i - 1][j - 1]  
If p[i] == '\*' there has two situation:  
  if p[i - 1] != s[j] && p[i - 1] != '.' : result[i][j] = result[i][j - 2];//a* counts as empty  
  else result[i][j] = result[i - 1][j] || result[i][j - 1] || result[i][j - 2];  
    result[i - 1][j] ===> a* counts as multiple a  
    result[i][j - 1] ===> a* counts as single a  
    result[i][j - 2] ===> a* counts as empty  
	
11. [Container With Most Water](https://leetcode.com/problems/container-with-most-water/#/description)  
Init the maxArea = (height.length - 1) * Math.min(height[0], height[height.length - 1]);  
We konw that area = width * height.  
As we inited maxArea has the max width, and now we want to check if there exist bigger area with smaller width, at this situation the area must has a bigger height.  
If we move the index with bigger height[x], the area is impossible to increase since width is miner while height of area is still limited.  
So we try to move the index with smaller height[x] and replace its value:  
```
var i = 0, j = height.length - 1;  
if height[i] > height[j]:  j--;
else:  i++;  
maxSize = Math.max(maxSize, (j - i) * Math.min(height[i], height[j]));
```  

12. [Integer to Roman](https://leetcode.com/problems/integer-to-roman/#/description)  
```
//10000
var M = ["", "M", "MM", "MMM"];
//1000
var C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
//100
var X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
//10
var I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
//cal by / and %
return M[Math.floor(num / 1000)] + C[Math.floor(num % 1000 / 100)] + X[Math.floor(num % 100 / 10)] + I[Math.floor(num % 10)];
```  

13. [Roman to Integer](https://leetcode.com/problems/roman-to-integer/#/description)  
Init result to first number of s, then use two point ergodic s(pre and cur):  
if pre <= cur: result += cur;  
else: result += cur - 2 * pre;

14. [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/#/description)  
First sort the strs by strs.sort().  
Then compare the first and last strs' longest commen prefix.  
Return result.  

15. [3Sum](https://leetcode.com/problems/3sum/#/description)  
Sort the array, then check all values by below rules:  
when checking arr[i], set j = i + 1, k = arr.length - 1.  
If(arr[i] + arr[j] + arr[k] > 0), it means sum need lower number, so execute k--.  
Else if(arr[i] + arr[j] + arr[k] < 0), it means sum need higher number, so execute j--.  
Else push [arr[i], arr[j], arr[k]] to result.  
We use the character of sorted arr here. Besides that, we need to avoid the same number.  

16. [3Sum Closest](https://leetcode.com/problems/3sum-closest/#/description)  
Just like last exercise.  

17. [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/#/description)  
Init resultArr to [""];  
Assume digits is "23",  
for 2, we can get ["a", "b", "c"] in resultArr.  
for 3, we delete the first element in resultArr("a"), then combine "a" and ["d", "e", "f"], then push them to resultArr, now the resultArr is: ["b","c","ad","ae","af"].  
And do the same operat to "b" and "c"(All elements in resultArr): delete first element in resultArr("b") ... ["c","ad","ae","af","bd","be","bf"] ... ["ad","ae","af","bd","be","bf","cd","ce","cf"]  

18. [4Sum](https://leetcode.com/problems/4sum/#/description)  
Just like 15-3Sum.  
First we sort the arr, then for each elements in arr, execute: threeSum(arr.splice(i), target - arr[i]).  

