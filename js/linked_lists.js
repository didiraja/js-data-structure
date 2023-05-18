function LinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
  };

  let length = 0;
  let head = null;

  this.append = function (element) {
    // João - José - Maria
    // adds an element at the end of the list
    let node = new Node(element); // João, null - José, null - Maria, null
    let current; // undefined

    if (head === null) {
      // null - node - node
      head = node;
    } else {
      current = head; // node1

      while (current.next) {
        // null - node2 - null
        current = current.next; // node1.next = node2
      }

      current.next = node; // José - Maria
    }

    length++; // 0 - 1 - 2
  };

  this.insert = function (position, element) {
    // 0, Carlos - 2, Ana
    // adds an element at some index
    if (position >= 0 && position <= length) {
      // 0 && 3 - 0 && 4
      let node = new Node(element); // newNode
      current = head; // node0 (João) - node0 (Carlos)
      let previous; // undefined
      index = 0;

      if (position === 0) {
        // true - false
        node.next = current; // newNode.next = node0 (João)
        head = node; // head = newNode (Carlos - node0)
      } else {
        while (index++ < position) {
          // 0 < 2 - 1 < 2 - 2 < 2
          previous = current; // node0 - node1
          current = current.next; // node1 - node2
        }
        node.next = current; // newNode = node2
        previous.next = node; // node1.next = newNode
      }

      length++; // 5
      return true;
    } else {
      return false;
    }
  };

  // node1 - João
  // node2 - José
  // node3 - Maria

  this.removeAt = function (position) {
    // 0 - 1
    // remove element from index

    if (position > -1 && position < length) {
      // true - false
      let current = head; // node1 - (head é sempre index 0)
      let previous; // undefined
      index = 0;

      if (position === 0) {
        // true
        head = current.next; // node2
      } else {
        while (index++ < position) {
          // 0 < 1
          previous = current; // node1
          current = current.next; // node2
        }
        previous.next = current.next; // João -> Maria
      }
      length--;

      return current.element; // node1 - node2 (elemento elminado)
    } else {
      return null;
    }
  };

  this.remove = function (element) {
    // remove element param
    let index = thins.indexOf(element);
    return this.removeAt(index);
  };

  this.indexOf = function (element) {
    // returns element index
    let current = head;
    index = 0;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  };

  this.isEmpty = function () {
    // returns if list is empty
    return length === 0;
  };

  this.size = function () {
    // returns instance length
    return length;
  };

  this.getHead = function () {
    return head;
  };

  this.toString = function () {
    // returns list as string

    let current = head; // node1
    let string = "";

    while (current) {
      // null - node2 - node3
      string += current.element + " "; // João José Maria
      current = current.next; // node3 - null
    }

    return string;
  };

  this.print = function () {
    // prints list on cnsole
    console.log(this.toString());
  };
}

let ll = new LinkedList();

ll.append("João");
ll.append("José");
ll.append("Maria");

ll.print();

ll.removeAt(1);

ll.print();
