var reduce = function(nums, fn, init) {
    return nums.reduce((item, current)=>{
        return fn(item, current);
    },init);
};

nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0

// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr * curr; }
// init = 100

// nums = []
// fn = function sum(accum, curr) { return 0; }
// init = 25

console.log(reduce(nums, fn, init));