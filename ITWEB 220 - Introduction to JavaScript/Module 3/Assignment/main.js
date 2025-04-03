// Module 3 Assignment demo code

let students = [
    { name: 'Alice', course: 'Math', grade: 85 },
    { name: 'Sandy', course: 'History', grade: 88 },
    { name: 'David', course: 'English', grade: 92 },
];

function displayStudents() {
    // Suggested: .foreach loop with concatenated output
    students.forEach(student => {
        console.log("Name: " + student.name + ", Course: " + student.course + ", Grade: " + student.grade)
    })
}

function sortStudents() {
    // Suggested: Sort by name
    students.sort((a, b) => {
        if (a.name.localeCompare(b.name) === 0) {
            return a.course.localeCompare(b.course);
        } 
        return a.name.localeCompare(b.name);
    });
}

function addStudent() {
    // write prompts for variables called name, course, and grade
    // execute students.push() with the following in the parentheses:
    // { name: name, course: course, grade: parseInt(grade) }
    let name = prompt("Please enter the student's name:")
    let course = prompt("Please enter the student's course name:")
    let grade = prompt("Please enter the student's grade:")
    students.push({ name: name, course: course, grade: parseInt(grade) });
}

function manageStudents() {
    let continueAdding = true;
    while (continueAdding && students.length < 10) {
        // execute addStudent(), sortStudents(), and displayStudents() here
        addStudent()
        sortStudents ()
        console.clear()
        displayStudents()

        
        if (students.length >= 10) {
            alert("Student list is full. Cannot add more.");
            continueAdding = false;
        } else {
            continueAdding = confirm("Would you like to enter another student?");
        }
    }

    if (students.length >= 10) {
        console.log("Student list is full. No more can be added.");
    } else {
        console.log("Exited the student management program.");
    }
}

manageStudents();