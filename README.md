
# Employee Management System CLI

## Project Description
The Employee Management System is a command-line application built using JavaScript and Node.js. It allows users to manage employee records through a simple interactive menu.

Employee data is stored in a JSON file, so records are preserved even after the application is closed.

## Features
- Add new employees
- Update employee details
- Delete employee records
- Search employees by ID
- Display all employees
- Validate employee ID and salary
- Prevent duplicate employee IDs
- Store and retrieve employee data using JSON file persistence

## Technologies Used
- JavaScript
- Node.js
- Readline Promises
- JSON
- File System (`fs/promises`)

## Project Structure
```text
employee-management-cli/
│
├── src/
│   ├── app.js
│   ├── menu.js
│   └── employees.js
│
├── employees.json
├── package.json
├── .gitignore
└── README.md
```

## How to Run

### Prerequisites
- Node.js installed
- Git installed (optional)

### Steps

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project folder:
   ```bash
   cd employee-management-cli
   ```

3. Run the application:
   ```bash
   node src/app.js
   ```

## Application Menu

```text
===== Employee Management System =====

1. Add Employee
2. Update Employee
3. Delete Employee
4. Search Employee
5. List Employees
6. Exit
```

Select an option from the menu and follow the instructions.

## Data Persistence

Employee records are stored in `employees.json`.

The application loads existing employee records when it starts and saves changes whenever an employee is added, updated, or deleted.

## Learning Outcomes

This project demonstrates practical use of:
- Variables and data types
- Functions
- Arrays and objects
- Array methods (`some()`, `find()`, `filter()`)
- Conditional statements and loops
- Modules using CommonJS
- Asynchronous programming (`async/await`)
- Error handling (`try/catch`)
- Node.js file handling
- JSON data storage

## Author

Pujitha Polisetty
