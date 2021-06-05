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
        if (typeof this.arg == "string") {
            this.arg = this.arg.slice(0, this.arg.length - n);
            return this;
        }
        for (let i = 0; i < arguments.length; i++) {
            this.arg -= arguments[i];
        }
        return this;
    }

    multiply(n) {
        if (typeof this.arg == "string") {
            let str = this.arg;
            for (let i = 2; i <= n; i++) {
                this.plus(str);
            }
            return this;
        }
        this.arg = this.arg*n;
        return this;
    }

    divide(n) {
        if (typeof this.arg == "string") {
            let k = Math.floor(this.arg.length / n);
            this.arg = this.arg.slice(0, k);
            return this;
        }
        this.arg = this.arg/n;
        return this;
    }

    get () {
        return this.arg;
    }
}




// Create IntBuilder on ES6

class IntBuilder extends Builder {
    mod(n) {
        this.arg = this.arg%n;
        return this;
    }
}

let intBuilder = new IntBuilder(10);

console.log(intBuilder.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get());





// Create StringBuilder on ES5

function StringBuilder(arg) {
    this.arg = arg;

    this.remove = function(str) {
        this.arg = this.arg.split(str).join("");
        return this;
    };

    this.sub = function(from, n) {
        this.arg = this.arg.substring(from,from+n);
        return this;
    };
  }


StringBuilder.prototype = Object.create(Builder.prototype);


let strBuilder = new StringBuilder("Hello");

console.log(strBuilder.plus(" all", "!").minus(4).multiply(3).divide(4).remove("l").sub(1,1).get());

