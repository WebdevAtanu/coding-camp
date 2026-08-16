/*
explanation: Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure. It works by first building a max heap from the input array, and then repeatedly extracting the maximum element from the heap and placing it at the end of the array. The process continues until all elements are sorted.
*/

function heapSort(arr) {
    if (arr.length <= 1) return arr; // base case: arrays with 0 or 1 element are already sorted

    // Build max heap
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, arr.length, i); // Call heapify on the reduced heap
    }

    // Extract elements from heap one by one
    for (let i = arr.length - 1; i > 0; i--) {
        // Move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

// Helper function to maintain the heap property
function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1; // left child index
    let right = 2 * i + 2; // right child index

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root, swap and continue heapifying
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}