// ontain dubplocate vaslue

// Question 1 link : https://leetcode.com/problems/contains-duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const containsDuplicate = (nums) => {
        let map = {}
        for(i = 0; i < nums.length; i++){
            if(nums[i] in map){
                return true
            }else{
                map[nums[i]] = i
            }
        }
        return false
}

// Runtime: 153 ms, faster than 35.60% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 51.1 MB, less than 40.19% of JavaScript online submissions for Contains Duplicate.
// Next challenges:

// Question 2: 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different 
// word or phrase, typically using all the original letters exactly once.


// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = (s,t) => {
    let map = {}
    if(s.length !== t.length){
        return false
    }

    for(i = 0; i < s.length; i++){
        if(map[s[i]]){
            map[s[i]]++
        }else{
            map[s[i]] = 1
        }
    }
    for(i = 0; i <t.length; t++){
        if(map[t[i]]){
            map[t[i]]--
        }else{
            return false
        }
    }

    return true

}


// accepted solution
const isAnagramT = (s, t) => {
    let len = s.length, fMap = new Int16Array(123)
    if(t.length !== len) return false
    for(let i = 0; i < len; i++){
        fMap[s.charCodeAt(i)]++
    }
    
    for(let i = 0; i < len; i++){
        if (--fMap[t.charCodeAt(i)] < 0) return false
    }
    return true
}

// Runtime: 117 ms, faster than 51.04% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 41.9 MB, less than 99.65% of JavaScript online submissions for Valid Anagram.
// Next challenges:



// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = (nums, target) => {
    let map = {}
    for(let i = 0; i <nums.length; i++){
        if(target - nums[i] in map){
            return [map[target - nums[i]], i]
        }else{
            map[nums[i]] = i
        }
    }
}



// 167. Two Sum II - Input Array Is Sorted
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
// find two numbers such that they add up to a specific target number. 
// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

const twoSum2 = (numbers, target) => {
    let start = 0
    let end = numbers.length - 1
    while(start < end){
        let currSum = numbers[start] + numbers[end]
        if(currSum > target) end--
        else if(currSum < target) start++
        else return [start + 1, end + 1]
    }
    return []
}

// Runtime: 93 ms, faster than 48.18% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
// Memory Usage: 42.6 MB, less than 86.53% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
// Next challenges: