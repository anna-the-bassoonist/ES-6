const students = [
    {name: 'Frank', grade: 7},
    {name: 'Martha', grade: 6},
    {name: 'Martin', grade: 3}
];
let allStudPassedTheCourse = students.every(function(student){
    return student.grade >= 6;
});
console.log(allStudPassedTheCourse);

let atLeastOneStudPassedTheCourse = students.some(function(student){
    return student.grade >= 6;
});
console.log(atLeastOneStudPassedTheCourse);


// ES5:
// let allStudPassedTheCourse = false;

// for(let i = 0; i < students.length; i++){
//     let student = students[i];
//     if(student.grade < 6) {
//         allStudPassedTheCourse = false;
//         break;
//     } else {
//         allStudPassedTheCourse = true;
//     }
// }
