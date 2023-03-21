let student: Student = {name: "Mary Ann", id: "1"};

const students: Student[] = [student, {name: "Tom", id: "2"}];
console.log(students);

changeNameOf("1", "Mary");
console.log(students);


function getStudentById(id: string): Student {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            return students[i];
        }
    }
}

function changeNameOf(studentsId: string, newName: string): void {
    const student = getStudentById(studentsId);
    student.name = newName;
}


console.log();
console.log("--------- Save changes to new Array ----------");

let nameToChange: string = "Cherry";
let idToChange: string = "2";

let studentsChanged = students.map(changeName);
console.log(students);
console.log(studentsChanged);

function changeName(student: {id: string, name: string}): Student {
    if(idToChange === student.id) {
        return { name: nameToChange, id: student.id };
    }

    return student;
}


console.log();
studentsChanged = students.map(item => changeName2(item, "2", "Tom & Cherry"));

console.log(students);
console.log(studentsChanged);

function changeName2(student: Student,
                    idToChangeName: string,
                    newName: string)
    : Student
{
    if (idToChangeName !== student.id) {
        return student;
    }

    return { name: newName, id: student.id };
}

type Student = {
    name: string;
    id: string;
}