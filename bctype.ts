//interfacing
interface Student {
    studentId: string; 
    name : string; 
    age? : Number;
    nameLength?: number;
}

//empty list 
let students : Array<Student> = [];

students.push({
    studentId : "1",
    name: "Jeremy Egelbert", 
})
students.push({
    studentId : "2",
    name: "Jerma", 
})

for (var j = 0; j < students.length; j++) {
    students[j].nameLength = students[j].name.length;
    console.log(students[j]);
}

