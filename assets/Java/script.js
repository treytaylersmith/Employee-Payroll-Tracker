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
  // If cancelled
  if (!first) {
    return;
  }
  /* If input is a number or is empty, recall function and 
    close once nested function is complete*/
  else if (!(isNaN(first)) || first === '') {
    alert("Please type a name. Try again");
    collectEmployees();
    return;
  }
  else {
    employee.firstName = first;
  }

  // Prompt User for Last Name 
  let last = window.prompt("What is the employee's last name");
  employee.lastName = last;

  // If cancelled
  if (!last) {
    return;
  }
  /* If input is a number or is empty, recall function and 
    close once nested function is complete*/
  else if (!(isNaN(last)) || last === '') {
    alert("Please type a name. Try again");
    collectEmployees();
    return;
  }
  else {
    employee.lastName = last;
  }

  // Prompt User for Salary number
  let salary = window.prompt("What is the employee's salary?");

  // If cancelled
  if (!salary) {
    return;
  }
  /* If input is NOT a number or is empty, recall function and 
   close once nested function is complete*/
  else if (isNaN(salary) || salary === '') {
    alert("Please type a number. Try again");
    collectEmployees();
    return;
  }
  else {
    employee.salary = salary;
  }

  // Adds employee object to employeArray
  employeesArray.push(employee);
  // console.log(employeesArray); // For testing
  if (window.confirm("Would you like to add another employee?")) {
    collectEmployees();
  }
  else {
    return;
  }

}

// Display the average salary
const displayAverageSalary = function (employees) {
  const employeeNum = employees.length;
  let totalSum = 0;
  for (i = 0; i < employeeNum; i++) {
    totalSum = totalSum + parseInt(employees[i].salary);

  }

  console.log(`The average salary out of our ${employeeNum} employees is ${(totalSum / employeeNum)}`);
  return;
}

// Select a random employee
const getRandomEmployee = function (employees) {
  const rand = Math.floor(Math.random() * employees.length);

  console.log(`Congratulations to ${employees[rand].firstName}, our random drawing winner!`);
  return;
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
