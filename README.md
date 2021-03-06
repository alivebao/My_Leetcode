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
  
19. [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/#/description)  
First get then length of List.  
Then get nth node want to remove in list.  
Delete the node by a pre and a cur pointer, delete by pre.next = cur.next;  

20. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/#/description)  
Try implement the function by stack.  

21. [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/#/description)  
```javascript
...
while(l1 && l2){
	...
}
while(l1){
	...
}
while(l2){
	...
}
...
```  

22. [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/#/description)  
Backtracking:  
  
We can create a function generateFun(leftNum, rightNum, s, resultArr).  
leftNum means reminder unused left parenthese, rightNum means reminder unused right parenthese.  
s means current string create by used left&right Number, resultArr means the final valid parentheses array.  
In generateFun, if(leftNum === 0 && rightNum === 0), it means all left and right parenthese used up, we get a valid parenthese, so resultArr.push(s).  
if(leftNum > rightNum), it means numbers of left parenthese in s less than right parenthese, it is invalid, so return.  
if(leftNum > 0), try generateFun(leftNum - 1, rightNum, s + '(', result).  
if(rightNum > 0), try generateFun(leftNum, rightNum - 1, s + ')', result).  
  
In backtracking,  
We list all possibilities:  
```js
leftNum == 0 && rightNum == 0 / leftNum > 0 / rightNum > 0.  
```
And delete invalid items:
```js
if(leftNum > rightNum){
	return;
}
```  

23. [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/#/description)  
According [21-Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/#/description), we can get a function mergeTwoLists, then ergodic all elements in lists get the result.  
Besides that, we can implement it by MERGE instead of ergodic to get lower time complexity( O(KN) -> O(NlogK) ):  
```js
var length = lists.length;
var mid = Math.floor((length - 1) / 2);
var l1 = mergeKLists(lists.slice(0, mid + 1));
var l2 = mergeKLists(lists.slice(mid + 1, length));
var result = mergeTwoLists(l1, l2);
return result;
```  

24. [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/#/description)  
Recursion  
```javascript
var swapPairs = function(head) {
    if(!head || !head.next){
        return head;
    }
    var n = head.next;
    head.next = swapPairs(head.next.next);
    n.next = head;
    return n;
};  
```  

25. [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/#/description)  
Recursion, just like last exercise.  

26. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/#/description)  
```javascript
var removeDuplicates = function(nums) {
    var count = 0;
    if(!nums || nums.length === 0){
        return count;
    }
    count =  nums.length;
    for(var i = 1 ; i < nums.length;){
        if(nums[i - 1] === nums[i]){
            nums.splice(i, 1);
            count--;
        }else{
            i++;
        }
    }
    return count;
};  
```  

27. [Remove Element](https://leetcode.com/problems/remove-element/#/description)  
Sort the array, then get the first and last index of val, splice the arr:  
```javascript
arr.splice(iBegin, iEnd - iBegin);
return arr.length;
```

28. [Implement strStr()](https://leetcode.com/problems/implement-strstr/#/description)  
Ergodic  

29. [Divide Two Integers](https://leetcode.com/problems/divide-two-integers/#/description)  
Implement the function by recursion - getPositiveDivideResult(d1, d2).  
Assume both d1 and d2 are positive number, cal the result of d1 / d2:  
If d1 < d2, return 0.  
Else set:  
```javascript
d2 *= d2;
t = 1;
```
while(d2 * 2 < d1), execute:  
```javascript
d2 *= d2;
t *= 2;
```
until d2 * 2 > d1  
then calculate the result of (d1 - cur(d2)) / ori(d2)  
the result of d1 / d2 is (t + getPositiveDivideResult(d1 - cur(d2), ori(d2)))  
```javascript
var getPositiveDivideResult = function(d1, d2){
  if(d1 < d2){
    return 0;
  }
  var ori = d2;
  var t = 1;
  while(d1 > d2 * 2){
    d2 *= 2;
    t *= 2;
  }
  return t + getPositiveDivideResult(d1 - d2, ori);
}
```  

31. [Next Permutation](https://leetcode.com/problems/next-permutation/#/description)  
Need to learn the character of next permutation.  
52431 -> 53124  
To the nums, we can change "52431" to "53124" by:  
Observe 52431 in a reverse order: 1 < 3, 3 < 4, that is OK. But 2 is smaller than 4, so we need to update the position of "2".  
And with which number?  
Observe "431", 4 > 2, 3 > 2, 1 < 2. We need to change the num in "431" which is just bigger than "2", it is "3" in "431".  
Update position of "2" and "3", now the nums is "53421".  
Finally, reverse the string of "421", we got the final result: "53124".  
  
33. [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/#/description)  
Divide search: devide the arr to two sorted arrays, then implement search function by a assistant function - binary chop  

34. [Search for a Range](https://leetcode.com/problems/search-for-a-range/#/description)  
The same way with last exercise.  

35. [Search Insert Position](https://leetcode.com/problems/search-insert-position/#/description)  
The same way with last exercise.  