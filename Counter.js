var createCounter = function(init) {
    let anch = init;
    this.init = init;
    return{
        increment : function(){
            return init += 1;
        },
        decreament : function(){
            return init -= 1;
        },
        reset : function(){
            return init = anch;
        }
    }
};
const counter = createCounter(5)
console.log(counter.increment());
console.log(counter.decreament());
console.log(counter.decreament());
console.log(counter.decreament());
console.log(counter.reset());






















// var createCounter = function(init) {
//     this.anch = init;
//     this.init = init;
// };

// createCounter.prototype.increment = function(){
//     return this.init += 1;
// }
// createCounter.prototype.decreament = function(){
//     return this.init -= 1;
// }
// createCounter.prototype.reset = function(){
//     return this.init = this.anch;
// }
// const counter = new createCounter(5);
// console.log(counter.increment());
// console.log(counter.decreament());
// console.log(counter.decreament());
// console.log(counter.decreament());
// console.log(counter.reset());