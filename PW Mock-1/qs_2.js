function firstUniqChar(s) {
    const charFrequency = {};
  
   
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
  
    
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charFrequency[char] === 1) {
        return i;
      }
    }
  
    
    return -1;
  }
  
  // Example usage:
  console.log(firstUniqChar("leetcode"));    
  console.log(firstUniqChar("loveleetcode")); 
  console.log(firstUniqChar("aabb"));           
  