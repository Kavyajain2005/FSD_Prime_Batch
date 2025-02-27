// -----------------------------
// Two separate Functions

// const sum = (a, b) => {
//     const ans = a + b;
//     return ans;
// };

// const printPretty = (txt) => {
//     console.log("-----------");
//     console.log(txt);
//     console.log("-----------");
// };

// const res = sum(20, 30);
// printPretty(res);

// -----------------------------

// const sum = (a, b) => {
//     const ans = a + b;
//     return ans;
// };

// const printPretty = (txt) => {
//     console.log("-----------");
//     console.log(txt);
//     console.log("-----------");
// };

// SEC: Separation Of Concerns

//printPretty(sum(20, 30));

// -----------------------------

// const sum = (a, b, c) => {
//     // Higher Order Function
//     const ans = a + b;
//     // return ans;
//     c(ans);
// };

// const printPretty = (txt) => {
//     // Callback Function
//     console.log("-----------");
//     console.log(txt);
//     console.log("-----------");
// };

// printPretty(sum(20, 30));
// sum(20, 30, printPretty);
// printPretty is a Callback Function
// ------------------------------

const getMetaData = () => {
    const name = prompt("Please enter your name");
    console.log("Hello", name);
    const numOfSubText = prompt("Please enter the number of subjects");
    const numOfSub = parseInt(numOfSubText); // parseFloat(), Number()
    return numOfSub;
};

const getSubjects = (num) => {
    const record = {};
    for(let i=0; i<num; i++) {
        const subName = prompt(`Please enter the name of subject ${i}`);
        const marks = Number(prompt(`Please enter the marks for ${subName}`));
        record[subName] = marks;
    }
    // record = {hello: "Kavya"}; :: ERROR
    // console.log(record);
    return record;
};

const getPercentage = (obj) => {
    const marks = Object.values(record);
    let totalMarks = 0;
    let totalSubjects = 0;

    const temp = (a) => {
        totalMarks += a;
        totalSubjects++;
    };
    marks.forEach(temp);
    // console.log(totalMarks / totalSubjects);
    const percentage = totalMarks / totalSubjects;
    return percentage;
};

const getHighestScoringSubject = (obj) => {
    let maxScore = 0;
    let maxScoreSubj = "";
    const marks = Object.entries(obj);
    marks.forEach((elem) => {
        const subjName = elem[0];
        const subjMarks = elem[1];
        if(subjMarks >= maxScore) {
            maxScore = subjMarks;
            maxScoreSubj = subjName;
        }
    });
    console.log(maxScoreSubj);
};

const getGrades = (percentage) => {
    const grades = [
        [60, 'B'],
        [70, 'B+'],
        [80, 'A'],
        [90, 'A+'],
    ];
    
    let grade = "F";



    grades.forEach((arr) => {
        if(arr[0] >= percentage) {
            grade = arr[1];
        }
    });

    console.log(grade);
};

const num = getMetaData();
const record = getSubjects(num);
getHighestScoringSubject(record);
const percentage = getPercentage(record);
console.log(percentage);
getGrades(percentage);

// const num = getMetaData();
// const record = getSubjects(num);

// const record = {
//     maths: 30,
//     english: 10, 
//     hindi: 20,
// };

// const percentage = getPercentage(record);
// const highestScoringSubject = getHighestScoringSubject(record);
