import {BinarySearch} from "../src/binarySearchRecursive.js"

var list = []
var search = [99, 100]
for(var i = 0; i < 999; i++){
  if(!search.includes(i)){
    list.push(i)
  }
}

list.sort(() => Math.random() - 0.5)

console.log(new binarySearch().binarySearch(list, search[0])==false)
console.log(new binarySearch().binarySearch(list, 3)==true)
console.log(new binarySearch().binarySearch(list, 100)==false)
