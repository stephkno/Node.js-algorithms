#!/usr/local/bin/node
//Binary tree
//Node class for single node in binary tree
export class Node{
  constructor(value, parent){
    this.value = value
    this.parent = parent
    this.left = null
    this.right = null
  }
  //get successor
  //leftmost node of right subtree
  successor(){
    var currentNode = this.right
    while(currentNode.left != null){
      currentNode = currentNode.left
    }
    return currentNode
  }
  //get predecessor
  //rightmost node of left subtree
  predecessor(){
    var currentNode = this.left
    while(currentNode.right != null){
      currentNode = currentNode.right
    }
    return currentNode
  }
}

//Tree class for structure of tree and tree functions
//
//04/02/21
export class Tree{
  constructor(){
    this.root = null
    this.verbose = false
    this.reversed = false
  }
  //determine if input value is fit for insertion ;)
  testInput(n){
    if(typeof(n) != 'number'){
      throw ("Must only insert numbers.")
    }
  }
  //insert node to tree
  insert(n){
    this.testInput(n)

    this.debug("Insert ")

    if(!this.root){
      this.root = new Node(n, null)
      this.debug("Added root node")
      return true
    }else{
      var parentNode = null
      var currentNode = this.root

      //repeat process until we reach leaf
      while (currentNode != null){
        parentNode = currentNode
        if ((n > currentNode.value && !this.reversed) || (n < currentNode.value && this.reversed)){
          this.debug("Traversing right")
          currentNode = currentNode.right
        }else if((n < currentNode.value && !this.reversed) || (n > currentNode.value && this.reversed)){
          this.debug("Traversing left")
          currentNode = currentNode.left
        }else{
          //node already exists in tree
          this.debug("Insertion failed")
          throw "Insertion failed - value already in tree"
        }
      }
      this.debug(parentNode)

      //if we get here it means we have found where to place node
      if((n > parentNode.value && !this.reversed) || (n < parentNode.value && this.reversed)){
        parentNode.right = new Node(n, parentNode)
        this.debug("Insert right")
      }else if((n < parentNode.value && !this.reversed) || (n > parentNode.value && this.reversed)) {
        parentNode.left = new Node(n, parentNode)
        this.debug("Insert left")
      }
      return true
    }
  }
  //find node in tree by value -> return node object
  find(n){
    this.testInput(n)
    this.debug("Find: ", n)
    var currentNode = this.root
    if(currentNode.value == n){
      return currentNode
    }

    while (currentNode != null && currentNode.value != n ){
      if ((n > currentNode.value && !this.reversed) || (n < currentNode.value && this.reversed)){
        this.debug("Traversing right")
        currentNode = currentNode.right
      }else if((n < currentNode.value && !this.reversed) || (n > currentNode.value && this.reversed)){
        this.debug("Traversing left")
        currentNode = currentNode.left
      }
    }
    //did we find the number?
    return currentNode

  }
  //test if node is in tree
  contains(n){
    if(n==this.root.value){
      return true
    }
    var a = this.find(n)
    if(a){
      this.debug("Found ", a)
    }
    return a!=null
  }
  //node children test cases
  hasLeftChild(node){
    return node.left && !node.right
  }
  hasRightChild(node){
    return !node.left && node.right
  }
  hasBothChildren(node){
    return node.left && node.right
  }
  isLeaf(node){
    return !node.left && !node.right
  }
  //tree traversals
  preOrder(node, list=[]){
    if(!node){
      return list
    }
    list.push(node.value)
    this.preOrder(node.left, list)
    this.preOrder(node.right, list)
    return list
  }
  inOrder(node, list=[]){
    if(!node){
      return list
    }
    this.inOrder(node.left, list)
    list.push(node.value)
    this.inOrder(node.right, list)
    return list
  }
  postOrder(node, list=[]){
    if(!node){
      return list
    }
    this.postOrder(node.left, list)
    this.postOrder(node.right, list)
    list.push(node.value)
    return list
  }
  //recursive function for reversing Tree
  //also switches tree insert/search mode
  reverse(node){
    this.reversed = !this.reversed
    if(!node){
      return
    }
    this.swap(node)
    this.reverse(node.left)
    this.reverse(node.right)
    return true
  }
  //function to initialize tree reversal
  reverseTree(){
    return this.reverse(this.root)
  }
  //node swap helper
  swap(node){
    const tmp = node.right
    node.right = node.left
    node.left = tmp
  }
  //traversals
  getPreOrder(){
    return this.preOrder(this.root)
  }
  getPostOrder(){
    return this.postOrder(this.root)
  }
  getInOrder(){
    return this.inOrder(this.root)
  }
  //delete element from list
  delete(n){
    //get node to delete
    var currentNode = this.find(n)
    //node not found
    this.debug("Delete ", n)
    if(!currentNode){
      return false
    }
    //node has no children
    //if node is root:
    //root = null
    //else
    //if node.parent.right == Node:
    //  node.parent.right = null
    //if node.parent.left == Node:
    //  node.parent.left = null
    //
    if(this.isLeaf(currentNode)){
      if(currentNode == this.root){
        this.root = null
        return true
      }
      if(currentNode.parent.right == currentNode){
        currentNode.parent.right = null
        return true
      }
      if(currentNode.parent.left == currentNode){
        currentNode.parent.left = null
        return true
      }
      return false
    }
    //node has only left child
    //if node is root:
    //root.value = root.left.value
    //root.left = null
    //else
    //if node.parent.left == Node
    //node.parent.left = node.left
    //else
    //if node.parent.right == node
    //node.parent.right = node.left
    if(this.hasLeftChild(currentNode)){
      if(currentNode == this.root){
        this.root.value = this.root.left.value
        this.root.left = null
        return true
      }
      if(currentNode.parent.left == currentNode){
        currentNode.parent.left = currentNode.left
        return true
      }
      if(currentNode.parent.right ==currentNode){
        currentNode.parent.right = currentNode.right
        return true
      }
      return false

    }
    //node has only right child
    //if node is root:
    //root.value = root.right.value
    //root.right = null
    //else
    //if node.parent.left == Node
    //node.parent.left = node.right
    //else
    //if node.parent.right == node
    //node.parent.right = node.right
    if(this.hasRightChild(currentNode)){
      if(currentNode == this.root){
        this.root.value = this.root.right.value
        this.root.right = null
        return true
      }
      if(currentNode.parent.left == currentNode){
        currentNode.parent.left = currentNode.right
        return true
      }
      if(currentNode.parent.right == currentNode){
        currentNode.parent.right = currentNode.right
        return true
      }
      return false
    }
    //node has two children
    //
    if(this.hasBothChildren(currentNode)){
      const successor = currentNode.successor()
      currentNode.value = successor.value

      if(successor.parent == null){
        return true
      }
      if(successor.parent.right != null && successor.parent.right == successor){
        successor.parent.right = null
        return true
      }
      if(successor.parent.left != null && successor.parent.right == successor){
        successor.parent.left = null
        return true
      }
    }
    this.debug("No delete")
    return false
  }
  //debug log helper
  debug(){
    if(this.verbose){
      console.log(arguments)
    }
  }
}
