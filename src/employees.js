
const employees = [
    /*{
        name: "Anu",
        id: 101,
        department: "HR",
        salary: 30000
    },
    {
        name: "Ravi",
        id: 102,
        department: "IT",
        salary: 40000
    }*/
];


// Add Employee

async function addEmployee(rl) {
    const id = Number(await rl.question("Enter Employee ID: "))

    if (!Number.isInteger(id) || id <= 0) {
        console.log("Invalid employee ID")
        return
    }

    const exist = employees.some(employee => employee.id === id);

    if (exist) {
        console.log("Employee ID already exists")
        return
    }

    const name = await rl.question("Enter Employee Name: ")
    const department = await rl.question("Enter Department: ")
    const salary = Number(await rl.question("Enter Salary: "))

    if (!name.trim() || !department.trim()) {
        console.log("Name and department cannot be empty")
        return
    }

    if (!Number.isFinite(salary) || salary <= 0) {
        console.log("Invalid salary")
        return
    }

    const employee = {
        id,
        name: name.trim(),
        department: department.trim(),
        salary
    };

    employees.push(employee)
    console.log("Employee added successfully!")
}

// List Employees
function listEmployees() {
    if (employees.length === 0) {
        console.log("No employees found")
    } else {
        for (const employee of employees) {
            console.log("ID:", employee.id)
            console.log("Name:", employee.name)
            console.log("Department:", employee.department)
            console.log("Salary:", employee.salary)
            console.log("----------------------")
        }
    }
}

// Start application

async function searchEmployee(rl) {
    const id = Number(await rl.question("Enter Employee ID: "))
    if (!Number.isInteger(id) || id <= 0) {
        console.log("Invalid employee ID")
        return;
    }
        const employee = employees.find(function(emp){
            return emp.id === id
        })
    if(employee){
    console.log(employee)
    }
    else {
        console.log("Employee not Found")
    }
    }


    async function deleteEmployee(rl){
        const id = Number(await rl.question("Enter Employee Id: "))
        if(!Number.isInteger(id) || id <= 0) {
             console.log("Invalid employee ID")
            return;
        }
        const employee = employees.find(emp => emp.id === id);

    if (!employee) {
        console.log("Employee not found");
        return;
        }
          const result = employees.filter(function(employee) {
                return employee.id !== id    
            })
            employees.splice(0, employees.length, ...result);
            console.log("Employee deleted successfully")  
           
        }
  
    
    async function updateEmployee(rl) {
        const id = Number(await rl.question("Enter Employee Id: "))
        if(!Number.isInteger(id) || id <= 0) {
             console.log("Invalid employee ID")
            return;
        }
        const employee = employees.find(emp => emp.id === id);
        if(!employee) {
            console.log("Employee not found")
            return
        }
        else{
            console.log(employee)
            const newName = await rl.question("Enter new name: ")
            const newDepartment = await rl.question("Enter new department: ")
            const newSalary = await rl.question("Enter new salary: ")
            const salary = Number(newSalary);
            if (newSalary.trim() !== "" && (!Number.isFinite(salary) || salary <= 0)) {
                console.log("Invalid salary");
                return;
       }
            employee.name = newName.trim() === "" ? employee.name : newName.trim()
            employee.department = newDepartment.trim() === "" ? employee.department : newDepartment.trim()
            employee.salary = newSalary.trim() === "" ? employee.salary : salary;
        console.log("Employee updated successfully");
        console.log(employee);
    }
        
       
}
module.exports = {
    addEmployee,
    listEmployees,
    searchEmployee,
    deleteEmployee,
    updateEmployee
};