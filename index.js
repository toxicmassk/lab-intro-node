class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.legnth - 1) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
