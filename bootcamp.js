var p1 = [4, 5];
var p2 = [0, 7];
var p3 = [-1, 1];
var e1 = (p1[0] * (p2[1] - p3[1]));
var e2 = (p2[0] * (p3[1] - p1[1]));
var e3 = (p3[0] * (p1[1] - p2[1]));
var areaT = ((1 / 2) * (e1 + e2 + e3));
console.log("The area of the triangle is: ".concat(areaT, "."));
/*
let arr1 = [-25, -10, -1, -10000];


for(let j = 0; j < arr1.length; j++){
    for (let i = 0; i < arr1.length; i++){
        if(arr1[i] > arr1[i+1]){
            [arr1[i], arr1[i + 1]] = [arr1[i + 1], arr1[i]];
        }
    }
}

console.log(`The sorted array is [${arr1}].`);
console.log(`The lowest value is [${arr1[0]}].`);
*/ 
