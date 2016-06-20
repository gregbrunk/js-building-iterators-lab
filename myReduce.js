// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, firstValue) {
  var i=0;  
  var reducedValue;

  if(typeof(firstValue) == "undefined") {
    i=1;
    reducedValue = arr[0];
  } else {
    reducedValue = firstValue;
  }

  for (; i<arr.length; i++) {
    reducedValue = callback(reducedValue, arr[i], i, arr);
  }
  return reducedValue;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
