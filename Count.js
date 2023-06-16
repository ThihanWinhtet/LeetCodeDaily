var createCounter = function(n) {
    let array = [];
    let count = 0;
    return function() {
        array[count] = n;
        count += 1;
        n += 1;
        array;
        return array;
    };
};

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

