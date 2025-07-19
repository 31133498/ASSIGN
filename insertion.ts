// for i from 1 to length of array - 1
//     key = array[i]
//     j = i - 1
//     while j >= 0 and array[j] > key
//         array[j + 1] = array[j]
//         j = j - 1
//     array[j + 1] = key



function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    // Shift elements greater than key to one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Example usage
console.log("Insertion Sort:", insertionSort([5, 3, 8, 4, 2]));
