# What is Stack?

To my understanding, stack is an array where there are multiple methods, like push(), pop(), peek(), is_empty(), is_full(), init_stack().

```javascript

const max_capacity = 1024;

class Stack {
  constructor() {
    this.arr = [];
    this.init_stack();
  }
  
  init_stack() {
    this.cur = -1;
  }

  is_empty() {
    return this.cur === -1 ? true : false;
  }

  is_full() {
    return this.cur === max_capacity - 1 ? true : false;
  }

  push(element) {
    if (is_full()) return;
    this.cur++;
    this.arr[this.cur] = element;
    return;
  }

  pop() {
    if (this.is_empty()) return;
    return this.arr[this.cur--];
  }

  peek() {
    if (this.is_empty()) return;
    return this.arr[this.cur];
  }
}

```

# Mental Model

LIFO (Last In, First Out).