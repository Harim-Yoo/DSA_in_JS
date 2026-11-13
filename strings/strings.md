# What is String?

String is an array of characters.

```javascript

class My_String {
  constructor() {
    this.arr = [];
    this.len = 0;
  }

  length() {
    return this.len;
  }

  indexOf(char) {
    for (let i=0;i<this.arr.length;i++) {
      if (this.arr[i] === char) {
        return i;
      }
    }
  }

  slice(start, end) {
    if (end === undefined) {
      end = this.len;
    }

    let result = [];
    for (let i=start; i<end; i++) {
      result.push(this.arr[i]);
    }
    return result.join("");
  }
  
  substring(start, end) {
    const length = this.len;

    if (end === undefined) {
      end = length;
    }

    if (start > end && end !== undefined) {
      const temp = start;
      start = end;
      end = temp;
    } 

    if (start > this.len) {
      start = start%length;
    }

    let result = [];
    for (let i=start;i<end;i++) {
      result.push(this.arr[i]);
    }
    return result.join("");
  }

  reverse() {
    let start = 0;
    let end = this.len;
    let result = [];
    
    for (let i=end-1;i>=start;i--) {
      result.push(this.arr[i]);
    }
    return result;
  }

  // more methods to make.

}

```
