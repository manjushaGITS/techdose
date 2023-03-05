// Given an unsorted array, sort using bubble sort
// Time complexity O(n2)

function bubbleSort(arr) {
    if(!arr.length) {
        console.log('Empty array!');
        return;
    }
    let count =1;
    while(count < arr.length) {
        for(let i=0; i<arr.length-count; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        count++;
    }
    console.log("bubble sortt result=", arr);
    return arr;
}

bubbleSort([5,3,8,4,2]);