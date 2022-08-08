module.exports = function reverse(n) {
    n = Math.abs(n);
    let arr = [];
    let str = "";
    while (n > 0) {
        arr.push(n % 10);
        n = Math.floor(n / 10);
    }

    for (let i = 0; i < arr.length; i++) {
        str = str + arr[i];
    }
    return str;
};
