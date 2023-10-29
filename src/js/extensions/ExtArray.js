import { isIterable, isString } from "../is";

class ExtArray extends Array {
  constructor(args) {
    super();

    if      (isString(args)) super.push(args);
    else if (isIterable(args))
      for(const arg of args)
        arg && super.push(arg);
    else if (args)
      super.push(args);
  }

  get first() { return super.at(0); }
  get last() { return super.at(super.length - 1); }
};

export default ExtArray;