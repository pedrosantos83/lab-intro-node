class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    return this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos > this.items.length - 1) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];

  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);

  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      const sum = this.items.reduce((a, b) => {
        return a + b;
      });

      return sum
    }
  }
  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      const avgItems = this.sum() / this.items.length;

      return avgItems;
    }
  }
}

module.exports = SortedList;
