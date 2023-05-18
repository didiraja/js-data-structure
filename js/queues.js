// ****************
// *** ARRAY 3D ***
// ****************
function Queue() {
  let items = [];

  this.enqueue = function (element) {
    items.push(element);
  };

  this.dequeue = function () {
    return items.shift();
  };

  this.front = function () {
    // return first from queue
    return items[0];
  };

  this.isEmpty = function () {
    // return if queue is empty or not
    return items.length === 0;
  };

  this.size = function () {
    // return queue size
    return items.length;
  };

  this.print = function () {
    // print queue on console
    console.log(items.toString());
  };
}

// let queue = new Queue();

// queue.enqueue("Carlos");
// queue.enqueue("Ana");
// queue.enqueue("Lucas");

// queue.print();

// queue.dequeue();
// queue.print();

// queue.dequeue();
// queue.print();

// **********************
// *** PRIORITY QUEUE ***
// **********************
// function PriorityQueue() {
//   let items = [];
//   /**
//    * [
//    *    Ana, 1
//    *    Lucas, 1
//    *    Carlos, 2
//    * ]
//    */

//   function QueueElement(element, priority) {
//     this.element = element;
//     this.priority = priority;
//   }

//   this.enqueue = function (element, priority) {
//     // Carlos, 2 - Ana, 1 - Lucas, 1
//     let queueElement = new QueueElement(element, priority);
//     let added = false;

//     for (let i = 0; i < items.length; i++) {
//       // lower number, higher priority - goes in front of items of lower priority
//       if (queueElement.priority < items[i].priority) {
//         // insert in position i, subscribe/remove 0 elements from queue
//         items.splice(i, 0, queueElement);
//         added = true;
//         break;
//       }
//     }

//     if (!added) {
//       items.push(queueElement);
//     }
//   };

//   this.dequeue = function () {
//     return items.shift();
//   };

//   this.print = function () {
//     for (let i = 0; i < items.length; i++) {
//       console.log(items[i].element, items[i].priority);
//     }
//   };
// }

// let pqueue = new PriorityQueue();

// pqueue.enqueue("Carlos", 2);
// pqueue.enqueue("Ana", 1);
// pqueue.enqueue("Lucas", 1);
// pqueue.print();

// pqueue.dequeue();
// pqueue.print();

// **********************
// *** CIRCULAR QUEUE ***
// **********************
function hotPotato(players, num) {
  // names, 7
  let queue = new Queue();

  for (let i = 0; i < players.length; i++) {
    queue.enqueue(players[i]);
  }

  let eliminated = "";

  while (queue.size() > 1) {
    // 5
    for (let i = 0; i < num; i++) {
      // BEFORE: ["China", "Dico", "Giovanna", "Claudio", "Ane"]
      queue.enqueue(queue.dequeue());
      // AFTER: ["Dico", "Giovanna", "Claudio", "Ane", "China"]
    }

    eliminated = queue.dequeue(); // Dico

    console.log(eliminated, "was eliminated from the game");
  }

  return queue.dequeue();
}

let names = ["China", "Dico", "Giovanna", "Claudio", "Ane"];

let winner = hotPotato(names, 7);

console.log("The winner is", winner);
