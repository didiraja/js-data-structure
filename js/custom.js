class LinkedList {
  constructor() {
    this.output = [];
  }

  print() {
    console.log(this.output);
  }

  append(item) {
    let obj = {
      current: item,
      next: null,
    };

    this.output.push(obj);

    for (let i = 0; i < this.output.length; i++) {
      const actual = this.output[i];
      const next = i + 1;

      if (this.output[next]) {
        actual.next = this.output[next].current;
      }
    }
  }

  removeAt(position) {
    if (position > -1 && position < this.output.length) {
      const toRemove = this.output[position];

      const newOutput = this.output.filter((item) => item !== toRemove);

      for (let i = 0; i < newOutput.length; i++) {
        const actual = newOutput[i];
        const next = i + 1;

        if (actual.next === toRemove.current) {
          actual.next = newOutput[next] ? newOutput[next].current : null;
        }
      }

      this.output = newOutput;
    }
  }
}

const linked = new LinkedList();

linked.append("Bulbassaur");
linked.append("Ivyssaur");
linked.append("Venussaur");
linked.append("Charmander");
linked.append("Charmeleon");
linked.append("Charizard");

linked.print();

linked.removeAt(2);
linked.removeAt(3);
linked.removeAt(3);

linked.print();
