var map = function(arr, fn) {
    let newArr = [];
    for(let item of arr){
        let i = fn(item, arr.indexOf(item));
        newArr.push(i);
    }
    return newArr;
};
arr = [1,2,3];
fn = function plusone(n){ 
    return n + 1; 
}
// fn = function plusI(n, i) { return n + i; }
console.log(map(arr, fn));