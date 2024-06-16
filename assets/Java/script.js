// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Creates Object Array
let employeesArray = [];

// Collect employee data
const collectEmployees = function () {

// Create employee object
  let employee = {
    firstName: undefined,
    lastName: undefined,
    salary: undefined
  }

  // Prompt User for First Name
  let first = window.prompt("What is the employee's first name");
  employee.firstName = first;
  // Test to see if input is name
  if (!first){
    return;
  }
  else if (!(isNaN(first)) || first === '') {
    alert("Please type a name. Try again");
    collectEmployees();
    return;
  } 
  else {
    employee.firstName = first;
  }

  let last = window.prompt("What is the employee's last name");
  employee.lastName = last;
  if (!last){
    return;
  }
  else if (!(isNaN(last)) || last === '') {
    alert("Please type a name. Try again");
    collectEmployees();
    return;
  }
  else {
    employee.lastName = last;
  }

  let salary = window.prompt("What is the employee's salary?");
  if (!salary){
    return;
  }
  else if (isNaN(salary) || salary === '') {
    alert("Please type a number. Try again");
    collectEmployees();
    return;
  }
   
  else {
    employee.salary = salary;
  }


  employeesArray.push(employee);
  console.log(employeesArray);
  if (window.confirm("Would you like to add another employee?")) {
    collectEmployees();
  }
  else {
    return;
  }

}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  collectEmployees();
  const employees = employeesArray;

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
