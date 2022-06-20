// ontain dubplocate vaslue

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