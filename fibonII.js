var fibGenerator = function*() {
    let x = 0;
    let y = 1;
    let z = 0;


    while(true){
        yield x;
        z = x + y;
        x = y;
        y = z;
        
    }
};

const gen = fibGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);