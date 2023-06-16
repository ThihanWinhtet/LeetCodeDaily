var once = function(fn) {
    let called = true;
    return function(...args){
        if(called){
            called = false;
            return {"calls" : 1, "value" : fn(...args)};
        }
    }
};

// // fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]

// let onceFn = once(fn)
// console.log(onceFn(calls));


// let fn = (a,b,c) => (a * b * c)
let onceFn = once(fn)
console.log(onceFn(5,7,4));
console.log(onceFn(5,7,9));
console.log(onceFn(5,7,9));
console.log(onceFn(5,7,9));
console.log(onceFn(5,7,9));


