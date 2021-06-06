class Builder {
    constructor (accumulator) {
        this.accumulator = accumulator;
    }

    plus(...n) {
        this.accumulator = this.accumulator + n.reduce((accum, currentVal) => accum + currentVal);
        return this;
    }

    minus(...n) {
        this.accumulator = this.accumulator - n.reduce((accum, currentVal) => accum + currentVal);
        // for (let i = 0; i < n.length; i++) {
        //     this.accumulator -= n[i];
        // }
        return this;
    }

    multiply(n) {
        this.accumulator = this.accumulator*n;
        return this;
    }

    divide(n) {
        this.accumulator = this.accumulator/n;
        return this;
    }

    get () {
        return this.accumulator;
    }
}




// Create IntBuilder on ES6

class IntBuilder extends Builder {
    mod(n) {
        this.accumulator = this.accumulator%n;
        return this;
    }
}

let intBuilder = new IntBuilder(10);

console.log(intBuilder.plus(2, 3, 2).minus(1,2).multiply(2).divide(4).mod(3).get());





// Create StringBuilder on ES5

function StringBuilder(accumulator) {
    this.accumulator = accumulator;
  }


StringBuilder.prototype = Object.create(Builder.prototype);

StringBuilder.prototype.minus = function(n) {
    this.accumulator = this.accumulator.slice(0, this.accumulator.length - n);
    return this;
}

StringBuilder.prototype.multiply = function(n) {
    let str = this.accumulator;
    for (let i = 2; i <= n; i++) {
        this.plus(str);
    }
    return this;
}

StringBuilder.prototype.divide = function(n) {
    let k = Math.floor(this.accumulator.length / n);
    this.accumulator = this.accumulator.slice(0, k);
    return this;
}

StringBuilder.prototype.remove = function(str) {
    this.accumulator = this.accumulator.split(str).join("");
    return this;
  }

StringBuilder.prototype.sub = function(from, n) {
    this.accumulator = this.accumulator.substring(from,from+n);
    return this;
}



let strBuilder = new StringBuilder("Hello");

console.log(strBuilder.plus(" all", "!").minus(4).multiply(3).divide(4).remove('l').sub(1,1).get());

