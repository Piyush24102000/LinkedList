/////Linked List////////
class Node{
  constructor(val){
      this.data = val
      this.next = null
  }
}
class LinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
  }
  
  addNode(val){
    let node = new Node(val)
    //Check if the its intital node
    if(this.size === 0){
      this.head = node
      this.tail = node
    }else{
      ///previously the head node was tail 
      ///So extend the tail to next
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }
  getSize(){
    return this.size
  }
  ///// Traverse the head to the last using this.head.next
  display(){
    let arrow = ""
    while(this.head){
      arrow += this.head.data + "->"
      this.head = this.head.next
    }
    console.log(arrow)
  }
  ////Remove first element
  removeFirst(){
    if(this.size == 0){
      console.log('List is empty')
    }
    else if(this.size == 1){
      this.head = null
      this.tail = null
      this.size = 0
    }
    else{
      this.head = this.head.next
      this.size--
    }
  }
  getFirst(){
    return this.head.data
  }
  getLast(){
    return this.tail.data
  }
  getIndex(ind){
    if(ind < 0 || ind >= this.size){
      return "Index not available in list"
    }else{
    let current = this.head;
    for(let i = 0 ; i < ind ; i++){
     current = current.next
    }
    return this.head.data
    }
  }
  addStart(val){
    let node = new Node(val)
    node.next = this.head
    this.head = node
    this.size++
  }
  insertAtIndex(val,ind){
    if(ind == 0){
      this.addStart(val)
    }
    else{
    let node = new Node(val)
    let current = this.head;
    for(let i = 0 ; i < ind-1 ; i++){
      current = current.next
    }
    node.next = current.next
    current.next = node
    }
    this.size++
  }
  deleteLastNode(){
    let current = this.head;
    for(let i = 0 ; i < this.size-2 ; i++){
      current = current.next
    }
      current.next = null
      this.tail = current
      this.size--
    // this.head.next = null
  }
  removeAt(ind){
    if(ind == 0){
      this.removeFirst()
    }
    else{
      let current = this.head
      for(let i = 0 ; i < ind-1 ; i++){
        current = current.next
      }
      current.next = current.next.next
    }
    this.size--
  }
}
const linkedList = new LinkedList()
linkedList.addNode(9)
linkedList.addNode(2)
linkedList.addNode(3)
linkedList.addNode(5)
linkedList.removeAt(0)
linkedList.display()