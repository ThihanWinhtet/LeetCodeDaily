var addTwoPromises = async function(promise1, promise2) {
    let x = 0;
    await promise1.then(val=>{
        x = val;
    })
    await promise2.then(val=>{
        x += val;
    })
    return x;
};

addTwoPromises(Promise.resolve(2), Promise.resolve(7)).then(console.log);