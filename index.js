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
    while(this.head){
      console.log(this.head.data)
      this.head = this.head.next
    }
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
}
const linkedList = new LinkedList()
// linkedList.addNode(9)
// linkedList.addNode(2)
linkedList.addNode(3)
// linkedList.removeFirst()
linkedList.display()