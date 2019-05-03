/***
 *
 * Compare and update the inventory stored in a 2D array against a second 2D array of a
 * fresh delivery. Update the current existing inventory item quantities (in arr1).
 * If an item cannot be found, add the new item and quantity into the inventory array.
 * The returned inventory array should be in alphabetical order by item.
 *
 */



function updateInventory(arr1, arr2) {
    arr2.forEach((newItem, newPos, newArr)=> {
      arr1.forEach((currentItem, currentPos, currentArr)=>{
        if (currentItem[1] === newItem[1]) {
          currentItem[0] += newItem[0];
          arr2.splice(newPos, 1);
        }
      });
    });

  return arr1.concat(arr2).sort((a, b)=>{
    if (a[1] < b[1]) {
      return -1;
    } else if (a[1] > b[1]) {
      return 1;
    } else {
      return 0;
    }
  });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
