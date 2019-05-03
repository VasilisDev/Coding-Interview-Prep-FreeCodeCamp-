
 function swap(array, i_1, i_2) {

  var temp   = array[i_1];
  array[i_1] = array[i_2];
  array[i_2] = temp;
 
 }

function bubbleSort(array) {

  for (var i=0, arrayLength = array.length; i<arrayLength; i++) {
    for (var j=0; j<=i; j++) {

     if (array[i] < array[j]) {
      swap(array, i, j);
                }
           }
       }
  
  return array;
}


  var array = bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

  console.log(array);