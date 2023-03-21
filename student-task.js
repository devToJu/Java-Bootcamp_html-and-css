var student = { name: "Mary Ann", id: "1" };
var students = [student, { name: "Tom", id: "2" }];
console.log(students);
changeNameOf("1", "Mary");
console.log(students);
function getStudentById(id) {
    for (var i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            return students[i];
        }
    }
}
function changeNameOf(studentsId, newName) {
    var student = getStudentById(studentsId);
    student.name = newName;
}
console.log();
console.log("--------- Save changes to new Array ----------");
var nameToChange = "Cherry";
var idToChange = "2";
var studentsChanged = students.map(changeName);
console.log(studentsChanged);
console.log(students);
function changeName(student) {
    if (idToChange !== student.id) {
        return student;
    }
    return { name: nameToChange, id: student.id };
}
console.log();
studentsChanged = students.map(function (item) { return changeName2(item, "2", "Tom & Cherry"); });
console.log(studentsChanged);
console.log(students);
function changeName2(student, idToChangeName, newName) {
    if (idToChangeName !== student.id) {
        return student;
    }
    return { name: newName, id: student.id };
}
