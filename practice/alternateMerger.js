let word1 = "a";
let word2 = "def";

var mergeAlternately = function(word1, word2) {
    let arr1=Array.from(word1);
    let arr2=Array.from(word2);
    let arr =[];
    let flag1=true;
    let flag2=false;
    let i=0,j=0,k=0;
    while(i<arr1.length && j<arr2.length){
        if(flag1){
            arr[k]=arr1[i];
            i++;
            flag1=false;
            flag2=true;
            k++;
        }
        if(flag2){
            arr[k]=arr2[j];
            j++;
            flag1=true;
            flag2=false;
            k++;
        }
        
    }
    while(i<arr1.length){
        arr[k] = arr1[i];
        i++;
        k++;
    }
    while(j<arr2.length){
        arr[k]=arr2[j];
        j++;
        k++;
    }
    return arr.join("");
};
console.log(mergeAlternately(word1,word2));