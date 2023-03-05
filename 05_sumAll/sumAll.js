const sumAll = function(a, b) {
    if ( (typeof a != "number") || (typeof b != "number") ) return "ERROR";
    if ( (a < 0) || (b < 0) ) return "ERROR";
    if (a > b) {
        let k = a;
        a = b;
        b = k;
    }
    return (a+b)*(b-a+1)/2;
};

// Do not edit below this line
module.exports = sumAll;
