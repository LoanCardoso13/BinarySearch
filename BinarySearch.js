// nums = [-1,0,3,5,9,12];
// target = 9;
nums = [-1,0,3,5,9,12];
target = 2;
flag = -1;

for (i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
        flag = i;
    }
}

alert(flag);