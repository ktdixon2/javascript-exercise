console.log("JS connect");

//Make the object//
const createStudentComponent = (student) => {
//Give it an action//    
    let studentComponent
//Give it an argument//    
    if (student.score >= 60) {
        studentComponent = `<div class="student">
        <h1 class="xx-large failing">${student.name}</h1>
        <section class="bordered dashed section--padded">${student.subject}</section>
        <aside class="pushRight">${student.info}</aside>
    </div>`
    } else {
        studentComponent = `<div class="student">
        <h1 class="xx-large passing">${student.name}</h1>
        <section class="bordered dashed section--padded">${student.subject}</section>
        <aside class="pushRight">${student.info}</aside>
    </div>`}
//Return the result//
    return studentComponent
}


//What to do with the result//


//The object, find target in document//
const studentContainer = document.querySelector("#container")
//The action, argument, and decision//
for (let i = 0; i < students.length; i++) {
    const student = students[i]
//The result, appears in the tartget//
    studentContainer.innerHTML += createStudentComponent(
        student
    )
}