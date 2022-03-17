// 1. Construct an object about this course. It must contain at least five properties. The values of those properties should be EITHER strings or integers.
const design = {
  teacher: `Mr.Dominguez`,
  period: 3,
  grade: 96,
  room: 'Mccain',
  school: `Altamont`,
  title: `Web Design`,
  subject: `literature`,
}
// 2. Write a statement that will log some information about your course to the console using dot-notation.
console.log(design.teacher);
console.log(design.grade);
console.log(design.room);
// 3. Construct a second object about ANOTHER course. It should have the SAME properties, but obviously different values.
const english = {
  teacher: `Mrs.Berdy`,
  period: 6,
  grade: 98,
  room: `Berdy`,
  school: `Altamont`,
}
// 4. Write a function which accepts a course as an argument and that uses dot-notation to output some information to the console from your object.
// You should be able to plug either course in as an argument and the function should work!
function course(english) {
  console.log(`The course is taught by ${english.teacher}`);
}

course(english);
// 5. Write a function that contains two statements: one that modifies the value of a property from either course object, and a second statement
// that alerts the user, via the console, about the modification. The function should accept two arguments: the object you're modifying and the
// new value that's being assigned to a property.
function updateCourse(aCourse, newName) {
// modify name of courses
  aCourse.name = newName;
//
  console.log(`The Course title has been updated to ${aCourse.name}`)
};

updateCourse(course1, "History")

// 6. Create an array called `myCourses` that contains an object for at least four of your courses (you can re-use the two from above).
// Use the .map() method to invoke the function below for each course in the array. Your courses will need, at least, properties of `title`, `subject`, `instructor`.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

function talkAboutMyCourses(anyCourse) {
  console.log(
    `${anyCourse.title} is a course about ${anyCourse.subject}. The course is taught by, ${anyCourse.instructor}.`
  );
}

// Create your array for #6 down here and invoke the .map() function after it.



const myCourses = [english, design];

myCourses.map((course) => {
  talkAboutMyCourses(course);
})
