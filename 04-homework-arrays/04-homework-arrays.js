const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];

const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];

const marks = [4, 5, 5, 3, 4, 5];

const getPairs = (students) =>{
    
    return [[students[0],students[2]],[students[1],students[3]],[students[4],students[5]]];

}

const manNotMan = getPairs(students);

const getPairsAndThemes = (pairs, themes) => {

    const joinedPairs = [];

    for (let someInt = 0; someInt < pairs.length;  someInt++){

        joinedPairs.push([pairs[someInt].join(" и "), themes[someInt]]);

    }

    return joinedPairs;
    
}

const getTheme = getPairsAndThemes(manNotMan, themes);

const getMark = (students,marks) =>{

    const marksAndStudents = [];

    for(let someInt = 0; someInt < students.length; someInt++){

        marksAndStudents.push([students[someInt],marks[someInt]]);

    }

    return marksAndStudents;

}

const marksNSt = getMark(students,marks);

const getRandMark = (complexAr) =>{

    const min = 1;

    const max = 5;
    
    const markRandomizer = Math.floor(Math.random() * (max - min + 1) + min);
    
    const randMarks = [];

    for(let someInt = 0; someInt < complexAr.length; someInt++){

        randMarks.push([complexAr[someInt], markRandomizer]);
    }

    return randMarks;

}

const randMarks = getRandMark(getTheme);

console.log(manNotMan);

console.log(getTheme);

console.log(marksNSt);

console.log(randMarks);