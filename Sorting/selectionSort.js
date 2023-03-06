// selection sort
// Time Complexity O(n ^ 2)
// Select i=0 ele as  min ele, compare with rest of elems in arr
// whenever finds min ele, set  min ele = curr ele
// replace i=0 ele with min ele
// repeat by setting i+1 ele as min ele and so on

function selectionSort(arr) {
    for(let i=0; i<arr.length; i++)  {
        let minIndex = i;
        for(let j=i+1; j<arr.length; j++) {
            if(arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        if(minIndex != i) {
            temp = arr[i];
            arr[i]=arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    console.log("selection sorted arr=", arr);
    return arr;
}

selectionSort([5,4,8,2,3,1]);
