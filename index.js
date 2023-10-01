// Define the functions that are being tested
function myEach(collection, callback) {
  for (let i = 0; i < collection.length; i++) {
    callback(collection[i]);
  }
}

function myMap(collection, callback) {
  const newArray = [];
  for (let i = 0; i < collection.length; i++) {
    newArray.push(callback(collection[i]));
  }
  return newArray;
}

function myReduce(collection, callback, initialValue) {
  let accumulator = initialValue === undefined ? collection[0] : initialValue;
  let startingIndex = initialValue === undefined ? 1 : 0;
  for (let i = startingIndex; i < collection.length; i++) {
    accumulator = callback(accumulator, collection[i]);
  }
  return accumulator;
}

function myFind(collection, predicate) {
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      return collection[i];
    }
  }
}

function myFilter(collection, predicate) {
  const newArray = [];
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      newArray.push(collection[i]);
    }
  }
  return newArray;
}

function mySize(collection) {
  return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(collection, n) {
  return n === undefined ? collection[0] : collection.slice(0, n);
}

function myLast(collection, n) {
  return n === undefined ? collection[collection.length - 1] : collection.slice(-n);
}

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}

// Export the functions so they can be tested
module.exports = {
  myEach,
  myMap,
  myReduce,
  myFind,
  myFilter,
  mySize,
  myFirst,
  myLast,
  myKeys,
  myValues,
};