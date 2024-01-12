// creating student intarface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// creating student1 and student2 objects
let student1: Student = {"firstName": "El Mehdi", "lastName": "Lkhaoua", "age": 21, "location": "Fes"};
let student2: Student = {"firstName": "Youssef", "lastName": "ali", "age": 23, "location": "CasaBlanca"};

// creating studentList array
let studentList: Array<Student> = [student1, student2];

// Create a table element
const table = document.createElement('table');

// Iterate over the studentList array
studentList.forEach((student) => {
    // Create a new row for each studente
    const row = document.createElement('tr');

    // Create a cell for the first name
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    // Create a cell for the location
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    // Append the cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    // Append the row to the table
    table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);
