var isEmpty = function(obj) {
    return (Object.keys(obj).length == 0) ? true : false;
};
obj = [1,3,4]
// obj = {}
// obj = {1 : "c", 2 : "s"}
console.log(isEmpty(obj));