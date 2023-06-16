var once = function(fn) {
    let called = true;
    return function(...args){
        if(called){
            called = false;
            return {"calls" : 1, "value" : fn(...args)};
        }
    }
};

// // fn = (a,b,c) => (a + b + c)
fn = (a,b,c) => (a * b * c)

let onceFn = once(fn)
console.log(onceFn(5,7,4));
console.log(onceFn(5,7,9));
console.log(onceFn(5,7,9));
console.log(onceFn(5,7,9));
console.log(onceFn(5,7,9));


