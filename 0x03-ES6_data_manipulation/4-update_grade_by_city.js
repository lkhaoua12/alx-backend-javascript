/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(students = [], city = '', newGrades = []) {
  const updatedStudents = students
    .filter((student) => student.location === city)
    .map((student) => {
      const updatedGrade = newGrades.find((std) => std.studentId === student.id);
      if (updatedGrade) {
        student.grade = updatedGrade.grade;
      } else {
        student.grade = 'N/A';
      }

      return student;
    });

  return updatedStudents;
}
