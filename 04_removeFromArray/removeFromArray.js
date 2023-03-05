const removeFromArray = function(arr, ...toDelete) {
    for(a of toDelete){
        for(let i = 0; i < arr.length; ++i){
            if(a === arr[i]) arr.splice(i,1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
