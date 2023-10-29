class ExtArray extends Array {
  get first() {
    if (this.length)
      return this[0];
  }

  get last() {
    if (this.length)
      return this[this.length - 1];
  }

  get [Symbol.toStringTag]() {
    return 'ExtArray';
  }
};

export default ExtArray;