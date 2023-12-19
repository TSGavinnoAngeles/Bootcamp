function tempCalc(deg, unit, unitTo) {
    if (unit == "C") {
        if (unitTo == "C") {
            return deg;
        }
        else if (unitTo == "F") {
            return ((9 / 5) * deg + 32);
        }
        else if (unitTo == "K") {
            return deg + 273.15;
        }
    }
    else if (unit == "F") {
        if (unitTo == "C") {
            return ((deg - 32) * (5 / 9));
        }
        else if (unit == "F") {
            return deg;
        }
        else if (unit == "K") {
            return (((deg - 32) * (5 / 9)) + 273.15);
        }
    }
    else if (unit == "K") {
        if (unitTo == "C") {
            return deg - 273.15;
        }
        else if (unit == "F") {
            return ((deg - 273.15) * (9 / 5) + 32);
        }
        else if (unit == "K") {
            return deg;
        }
    }
}
var degree = 36.5;
var unit = "C";
var unitTo = "F";
var finalRes = tempCalc(degree, unit, unitTo);
//console.log(`Converting ${degree} ${unit} to degree ${unitTo} and the result is: ${finalRes} ${unitTo}`);
console.log("temperature: " + degree);
console.log("input unit: " + unit);
console.log("unit of measure: " + unitTo);
console.log(" ");
console.log("temperature: " + finalRes + unitTo);
