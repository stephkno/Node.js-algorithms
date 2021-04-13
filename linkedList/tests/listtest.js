import {List} from "../src/list.js"

var list = new List()
var test = [1,2,3,4,5]

list.fromArray(test)

console.log(list.toString())
console.log(list.contains(3)==true)
list.delete(2)
console.log(list.contains(3)==false)
list.delete(0)
console.log(list.contains(0)==false)
list.append(8)
list.appendHead(99)
list.appendHead(22)
console.log(list.at(0)==22)
console.log(list.at(1)==99)
