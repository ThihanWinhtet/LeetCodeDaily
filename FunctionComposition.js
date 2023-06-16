var compose = function(functions) {
	return function(x) {
        while(functions.length > 0){
            y = functions.pop();
            x = y(x);
        }
        return x;
    }
};

functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// functions = [], x = 42

const fn = compose(functions);
console.log(fn(x));
