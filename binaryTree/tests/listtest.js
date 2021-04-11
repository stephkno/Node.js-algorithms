import {List} from "../src/list.js"

var list = new List()
var test = [1,2,3,4,5]
list.fromList(test)
console.log(list.at(3))
list.delete(3)
console.log(list.at(3))
list.delete(0)
console.log(list.at(0))
