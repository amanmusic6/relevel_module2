/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maximumProduct = function(nums, k) {
    let mod=Math.pow(10,9)+7;
        priority_queue <int, vector<int>, greater<int>> pq;
        for(int i=0;i<nums.size();i++){
            pq.push(nums[i]);
        }
        while(k>0){
            int x=pq.top();
            pq.pop();
            x=x+1;
            pq.push(x);
            k--;
        }
        long long int ans=1;
        while(pq.size()>0){
            int x=pq.top();
            pq.pop();
            ans=(ans*x)%mod;
        }
        return ans;
    // let max=0;
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i]>max)
    //         max = nums[i];
    // }
    // let arr = new Array(max+1+k).fill(0);
    // for(let i=0;i<nums.length;i++){
    //     arr[nums[i]]++;
    // }
    // let pt = 0;
    // while(k>0){
    //     if(arr[pt]===0){
    //         pt++;
    //         continue;
    //     }
    //     arr[pt]--;
    //     arr[pt+1]++;
    //     k--;
    // }
    // let ans=1;
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i] !== 0)
    //         ans = ans * Math.pow(i,arr[i])
    // }

    //  console.log(arr);
     //==========================
    //  let temp = [];
    //  for(let i=0;i<arr.length;i++){
    //     if(arr[i]!==0){
    //         let j = arr[i];
    //         while(j>0){
    //             temp.push(i);
    //             j--;
    //         }
    //     }
    //  }
    //  console.log(temp);
};
maximumProduct([24,5,64,53,26,38],54)
