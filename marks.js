
const marks = [78, 45, 90, 65, 50, 0, 100, 33];

function analyseMarks(marks, passMark = 50) {

    if (!Array.isArray(marks) || marks.length === 0) {
        return null;
    }

    if (!Number.isInteger(passMark) || passMark < 0 || passMark > 1000) {
        return null;
    }

    for (let i = 0; i < marks.length; i++) {
        if (
            typeof marks[i] !== "number" ||
            !Number.isInteger(marks[i]) ||
            marks[i] < 0 ||
            marks[i] > 1000
        ) {
            return null;
        }
    }

    let total = 0;
    let highest = marks[0];
    let lowest = marks[0];
    let passedCount = 0;
    let failedCount = 0;
    let evenCount = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];

        if (marks[i] > highest) {
            highest = marks[i];
        }

        if (marks[i] < lowest) {
            lowest = marks[i];
        }

        if (marks[i] >= passMark) {
            passedCount++;
        } else {
            failedCount++;
        }

        if (marks[i] % 2 === 0) {
            evenCount++;
        }
    }

    let average = Number((total / marks.length).toFixed(2));
    let range = highest - lowest;
    let passRate = Number(((passedCount / marks.length) * 100).toFixed(2));

    let status = average >= passMark ? "Target met" : "Need support";

    let grade;

    switch (true) {
        case average >= 80:
            grade = "A";
            break;
        case average >= 60:
            grade = "B";
            break;
        case average > 50:
            grade = "C";
            break;
        case average >= 40:
            grade = "D";
            break;
        default:
            grade = "D";
    }

    return {
        total,
        average,
        highest,
        lowest,
        range,
        passRate,
        passedCount,
        failedCount,
        status,
        grade
    };
}

console.log(analyseMarks(marks, 101));
