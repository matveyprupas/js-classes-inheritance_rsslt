// console.log(1);

class Builder {
    constructor (arg) {
        this.arg = arg;
    }

    plus(...n) {
        for (let i = 0; i < arguments.length; i++) {
            this.arg += arguments[i];
        }
        return this;
    }

    minus(...n) {
        for (let i = 0; i < arguments.length; i++) {
            this.arg -= arguments[i];
        }
        return this;
    }

    multiply(n) {
        this.arg = this.arg*n;
        return this;
    }

    divide(n) {
        this.arg = this.arg/n;
        return this;
    }

    mod(n) {
        this.arg = this.arg%n;
        return this;
    }

    get () {
        return this.arg;
    }
}


// Create IntBuilder on ES6

class IntBuilder extends Builder {

}

let intBuilder = new IntBuilder(10);

console.log(intBuilder.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get());



// Create StringBuilder on ES5

function StringBuilder(arg, subject) {
    Builder.call(this, arg);
    this.subject = subject;
  }

let strBuilder = new StringBuilder("Hello");

console.log(strBuilder);
