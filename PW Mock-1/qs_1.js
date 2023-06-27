function moveZeroes(nums) {
    let nonZeroPointer = 0; 

    
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
      
        nums[nonZeroPointer] = nums[i];
        nonZeroPointer++;
      }
    }
  
   
    for (let i = nonZeroPointer; i < nums.length; i++) {
      nums[i] = 0;
    }
    
    return nums;
  }
  
 
  let nums1 = [0, 1, 0, 3, 12];
  console.log(moveZeroes(nums1)); 
  
 
  