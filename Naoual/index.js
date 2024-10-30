// index.js
const { convertToLetterGrade, reverseString } = require('./function');

const grades = [89, 92, 58, 61, 78];
const letterGrades = grades.map(grade => convertToLetterGrade(grade));
console.log(letterGrades); // Output: ["B", "A", "E", "D", "C"]

// Example usage:
const original = "hello";
const reversed = reverseString(original);
console.log(reversed); // Output: "olleh"
