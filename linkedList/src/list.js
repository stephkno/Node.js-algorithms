class Node{
  constructor(item=null){
    this.item = item
    this.prev = null
    this.next = null
  }
}
//class implements linked list
//
//04/03/2021
//
export class List{
  constructor(){
    this.head = null
    this.tail = null
    this.index = 0
    this.length = 0
  }
  //create list from list input
  fromArray(list){
    list.forEach((item) => {
      this.append(item)
    })
  }
  //add item to list
  checkListEmpty(value){
    if(!this.head){
      //make node head
      this.head = new Node(value)
      this.tail = this.head
      return true
    }
    return false
  }
  append(value){
    this.length++

    //if list is empty
    if(this.checkListEmpty(value)){
      return true
    }
    //add to tail
    const newNode = new Node(value)
    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode
    return true
  }
  appendHead(value){
    this.length++

    //if list is empty
    if(this.checkListEmpty(value)){
      return true
    }

    //add to head
    const newNode = new Node(value)
    this.head.prev = newNode
    newNode.next = this.head
    this.head = newNode

    return true
  }
  popLast(){
    if(this.length <= 1){
      return
    }
    this.length--
    var item = this.tail.item
    this.tail.prev.next = null
    this.tail = this.tail.prev
    return item
  }
  //remove item from list
  delete(index){
    var node = this.getNode(index)
    if(node == this.head){
      this.head = node.next
      node.next.prev = null
      this.length--
      return true
    }
    if(node == this.tail){
      this.tail = node.prev
      node.prev.next = null
      this.length--
      return true
    }
    if(node.next){
      node.next.prev = node.prev
    }
    if(node.prev){
      node.prev.next = node.next
    }
    return false
  }
  //get item value by index
  at(index){
    return this.getNode(index).item
  }
  //get item node by index
  getNode(index){
    //index counter
    if(index > this.length){
      return false
    }

    var i = 0
    var currentNode = this.head

    //iterate list nodes
    while(i < index){
      currentNode = currentNode.next
      i++
    }
    //node not found
    if(!currentNode){
      return false
    }
    return currentNode
  }
  //get next item in list
  getNext(){
    if(this.index > this.length){
      this.index = 0
    }
    this.index++
    return at(this.index)
  }
  contains(query){
    var currentNode = this.head

    //iterate list nodes
    while(currentNode){
      if(currentNode.item == query){
        return true
      }
      currentNode = currentNode.next
    }
    return false
  }
  toString(){
    var output = ""
    var currentNode = this.head
    while(currentNode){
      output += currentNode.item + " "
      currentNode = currentNode.next
    }
    return output
  }
}
