export default function getStudentIdsSum(students = []) {
  return students.reduce((concur, current) => concur + current.id, 0);
}
