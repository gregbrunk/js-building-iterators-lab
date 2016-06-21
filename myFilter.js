function myFilter(arr, callback) {
var newArray = [];
  for (i=0; i<arr.length; i++) {
    if (callback(arr[i])===true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

//wrote this as just a crack at it 
//but not sure how to test.