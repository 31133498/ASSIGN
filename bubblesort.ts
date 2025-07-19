function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
       
        
        // Swap values
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Example usage
console.log("Bubble Sort:", bubbleSort([5, 3, 8, 4, 2]));





// for i from 0 to length of array - 1
//     for j from 0 to length - i - 1
//         if array[j] > array[j+1]
//             swap array[j] and array[j+1]
