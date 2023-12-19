let p1 = [0, 0];
let p2 = [5, 10]; 

let dist = Math.sqrt(((p2[0] - p1[0])**2)+((p2[1] - p1[1])**2));

console.log(`Distance: ${dist.toFixed(2)}`);

let p3 = [p1[0], p2[1]]; 
let p4 = [p2[0], p1[1]];

console.log(`Other sets of coordinates: [${p3[0]},${p3[1]}] [${p4[0]},${p4[1]}]`);