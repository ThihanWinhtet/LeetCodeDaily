Aarray.prototype.last = function() {
    return this.array[this.length-1];
};
// console.log(Aarray.prototype.last());

function Aarray(array){
    this.length = array.length;
    this.array = array;
}

let a = new Aarray([1,2,3,5]);
console.log(a.last());;