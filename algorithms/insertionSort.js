function insertionSort(array){

     let value,length = array.length;
     let j;

      for(let i= 0 ; i<length; i++){
       value = array[i];
         for(j=i-1; j>-1 && array[j] > value ; j--){
             array[j+1]=array[j];
      }
      array[j+1] = value;
   }
   return array;
}
