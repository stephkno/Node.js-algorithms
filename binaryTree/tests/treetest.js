import {Tree} from "../src/tree.js"
import {List} from "../src/list.js"

console.log("Binary tree - 04/03/2021")
var tree = new Tree();

var insert_list = []
for(var i = 0; i < 999999; i++){
  insert_list.push(i)
}
insert_list.sort(() => Math.random() - 0.5)

for(var i = 0; i < 999999; i++){
  tree.insert(insert_list[i])
}

console.log(tree.getInOrder())
console.log(tree.reverseTree())
console.log(tree.getInOrder())
