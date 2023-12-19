
function add(num1, num2){
    const sum = num1 + num2;
    //console.log(sum);
    return sum;
}
const addNew = (num1, num2 ) => {
    const sum = num1 + num2;
    //console.log(sum);
    return sum;
}
let sum = add(1,2) + addNew(1,2);
console.log(sum);
