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