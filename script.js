//1

function merge(left, right) {
    let arr = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }

    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
  const half = array.length / 2;

  if(array.length < 2){
    return array 
  }

  const left = array.splice(0, half)

  return merge(mergeSort(left),mergeSort(array))
}

array = [3, 8, 1, 9, 4, 2, 7, 6, 5];
console.log(mergeSort(array));

// 2

function mergeObj(left, right) {
    let arr = []

    while (left.length && right.length) {
        if (left[0].age < right[0].age) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }

    return [ ...arr, ...left, ...right ]
}

function mergeSortObj(array) {
  const half = array.length / 2
  
  if(array.length < 2){
    return array 
  }
  
  const left = array.splice(0, half)

  return mergeObj(mergeSortObj(left),mergeSortObj(array))
}


let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 35 },
    { name: "Eve", age: 28 }
];
console.log(mergeSortObj(people));