var chunk = function(arr, size) {
    let newArr = [];
    let limit = [];
    for(let item of arr){
        if(limit.length <= size){
            limit.push(item);
        }
        if(limit.length == size){
            newArr.push(limit);
            console.log(limit, 'li');
            limit = [];
        }
    }
    if(limit.length > 0){
        newArr.push(limit);
    }
    return newArr;
};
arr = [1,2,3,4,5,6,7], size = 3
console.log(chunk(arr, size));