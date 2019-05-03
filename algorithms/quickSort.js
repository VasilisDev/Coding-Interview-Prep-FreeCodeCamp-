function quickSort(array) {
 
return recursionQuickSort(array, 0, array.length-1);

}


function recursionQuickSort(array, left, right) {
    var index;
    if (array.length > 1) {
        index = partition(array, left, right);

        if (left < index - 1) {
            recursionQuickSort(array, left, index - 1);
        }

        if (index < right) {
            recursionQuickSort(array, index, right);
        }
    }
    return array;
}

function partition(array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)];
    while (left <= right) {
        while (pivot > array[left]) {
            left++;
        }
        while (pivot < array[right]) {
            right--;
        }
        if (left <= right) {
            var temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }
    return left;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]