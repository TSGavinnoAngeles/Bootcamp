var p1 = [0, 0];
var p2 = [5, 10];
var dist = Math.sqrt((Math.pow((p2[0] - p1[0]), 2)) + (Math.pow((p2[1] - p1[1]), 2)));
console.log("Distance: ".concat(dist.toFixed(2)));
var p3 = [p1[0], p2[1]];
var p4 = [p2[0], p1[1]];
console.log("Other sets of coordinates: [".concat(p3[0], ",").concat(p3[1], "] [").concat(p4[0], ",").concat(p4[1], "]"));
