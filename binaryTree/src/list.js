class Node{
  constructor(item=null, prev=null){
    this.item = item
    this.prev = prev
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
  fromList(list){
    list.forEach((item) => {
      this.append(item)
    })
  }
  //add element to list
  append(value){
    this.length++
    //list is empty
    if(this.head == null){
      //make node head
      this.head = new Node(value)
      this.tail = this.head
      return true
    }
    //add to tail
    this.tail.next = new Node(value, this.tail)
    this.tail = this.tail.next
    return true
  }
  //remove element from list
  delete(index){
    var node = this.getNode(index)
    if(node == this.head){
      this.head = node.next
      node.next.prev = null
      return
    }
    if(node == this.tail){
      this.tail = node.prev
      node.prev.next = null
      return
    }
    node.next.prev = node.prev
    node.prev.next = node.next
    return
  }
  //get element value by index
  at(index){
    return this.getNode(index).item
  }
  //get element node by index
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
  //get next element in list
  getNext(){
    if(this.index > this.length){
      this.index = 0
    }
    this.index++
    return at(this.index)
  }
}
