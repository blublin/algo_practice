const quickSort = (array, left = 0, right = array.length-1) => {
    // As long as array is larger than 1 element
    if (left < right) {
        // Find index where everything left is less than and everything right is greater than
        let pivInd = pivot(array, left, right)
        // Quicksort recursively the left side of the pivot index
        quickSort(array, left, pivInd-1)
        // Quicksort recursively the right side of the pivot index
        quickSort(array, pivInd+1, right)
    }
    return array
}

const pivot = (array, left, right) => {
    // set pivotInd to the right
    let p = right;
    // set j to left
    let j = left;
    // set i to 1 less than j
    let i = j - 1;

    for (; j < pivot; j++) {
        // if the element at index j is less than at the pivot index
        if (array[j] < array[pivot]) {
            // increment i
            i++
            // swap elements at i and j
            swap(array, i, p)
        }
    }
    // increment i by 1
    i++
    // swap i and p
    swap(array, i, p)
    // return i, the final pivot index
    // everything to the left is less, everything to the right is greater
    return i
}

const swap = (arr, i, j) => {
    // swap array values in-place, no need for return
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp;
}