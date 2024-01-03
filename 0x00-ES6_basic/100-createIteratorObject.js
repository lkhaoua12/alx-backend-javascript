export default function createIteratorObject(report) {
  const employeeList = Object.values(report.allEmployees).flat();
  return employeeList;
}
