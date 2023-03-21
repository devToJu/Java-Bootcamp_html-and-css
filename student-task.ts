let student: Student = {name: "Mary Ann", id: "1"};

const students: Student[] = [student, {name: "Tom", id: "2"}];
console.log(students);

changeNameOf("1", "Mary");
console.log(students);

function changeNameOf(studentsId: string, newName: string): void {
    students.forEach(student => {
        return (student.id === studentsId)
            ? student.name = newName
            : student;
    });
}


console.log();
console.log("--------- Save changes to new Array ----------");

let studentsChanged = students.map(student => {
    return (student.id === "2")
        ? {name: "Cherry", id: student.id}
        : student;
});

console.log(students);
console.log(studentsChanged);

type Student = {
    name: string;
    id: string;
}