function selectionSort(array){

  let size = array.length;
  let i,j,min;

  for(i=0;i<size;i++){
    min=i;
     for(j=i+1; j < size; j++){
      if(array[j] < array[min])
      {
         min = j;

       }
     }
     if(i != min)
     {
       [array[i],array[min]]=[array[min],array[i]];
     }
  }
  return array;
}

console.log(selectionSort([10,5,3,2,5,2,4343434,2,223334,42255,55,5]));
