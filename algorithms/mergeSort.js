
function mergeSort(array) {
 
  if(array.length < 2){
   return array;
  }

  var middle =  Math.floor((array.length) / 2);
  var left   =  array.slice(0,middle);
  var right  =  array.slice(middle);


  return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){

   var array = [];
   var leftIndex = 0,rightIndex=0;

  while(leftIndex < left.length && rightIndex < right.length){
       
       if(left[leftIndex] < right[rightIndex]){
         array.push(left[leftIndex++]);
       }
       else{
         array.push(right[rightIndex++]);
       }
  }

   return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}


  console.log(mergeSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]));

