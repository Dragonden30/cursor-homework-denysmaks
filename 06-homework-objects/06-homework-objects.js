const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

function getSubjects(student){
  const keys = Object.keys(student.subjects);
  let subjectStudent = keys.map(function(value){
    const subjectUpercase = value.split(`_`).join(` `);
    return subjectUpercase.slice(0,1).toUpperCase()+subjectUpercase.slice(1).toLowerCase();
  });
  return subjectStudent;
}

const subj = getSubjects(students[1]);
console.log(`Result of function getSubject: ` + subj);

function getAvarageMark(student){
  const average = Object.values(student.subjects).flat();
  return (average.reduce((a,b) => (a+b)) / average.length).toFixed(2);
}

const avg = getAvarageMark(students[0]);
console.log(`Result of function getAvarageMark: ` + avg);

function getStudentInfo(student){
  const {name, course} = student;
  const averageMark = getAvarageMark(student);
  return { course, name, AvarageNumber : averageMark};
}

const info = getStudentInfo(students[0]);
console.log(`Result of function getStudentInfo: `);
console.log(info);

function getStudentNames(students){
  let studentNames = students.map(function(student){
    let {name} = student;
    return student.name;
  });
  return studentNames.sort();
}

const name = getStudentNames(students);
console.log(`Result of function getStudentNames: `+ name);

function getBestStudent(students){
  let tempWinner = 0;
  let winner = 0;
  for(let i in students){
    if(tempWinner < getAvarageMark(students[i])){
      tempWinner = getAvarageMark(students[i]);
      winner = i;
    }
  }
  const {name} = students[winner];
  return {name};
}

const best = getBestStudent(students);
console.log(`Result of function getBestStudent: `);
console.log(best);

function calculateWordLetters(string){
  const stringArr = string.split(``)
  const counter = {};
  stringArr.forEach(function(index){
    counter[index] = counter[index] + 1 || 1;
  });
  return counter;
}

const calculace = calculateWordLetters(`students`);
console.log(`Result of function getBestStudent: `);
console.log(calculace);