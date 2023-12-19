function add(num1, num2) {
    var sum = num1 + num2;
    //console.log(sum);
    return sum;
}
var addNew = function (num1, num2) {
    var sum = num1 + num2;
    //console.log(sum);
    return sum;
};
var sum = add(1, 2) + addNew(1, 2);
console.log(sum);
