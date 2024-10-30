const convertToLetterGrade=(numericGrade)=>{
    if(numericGrade>=90) return "A";
    else if(numericGrade>=80 ) return "B";
    else if(numericGrade>=70) return "C";
    else if(numericGrade>=60 ) return "D";
    else return "E";
}

const reverseString =(str)=> {
    return str.split('').reverse().join('');
}






module.exports = {convertToLetterGrade , reverseString};




