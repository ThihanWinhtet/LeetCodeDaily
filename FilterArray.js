
var filter = function(arr, fn) {
    let newArr = [];
    for(let item of arr){
        let c = fn(item, arr.indexOf(item));
        if(c){
            newArr.push(item);
        }
    }
    return newArr;
};
// arr = [0,10,20,30];
// fn = function greaterThan10(n){ 
//     return n > 10; 
// }
// arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
console.log(filter(arr, fn));