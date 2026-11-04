
const readline = require("readline/promises")
const {
    addEmployee,
    listEmployees,
    updateEmployee,
    deleteEmployee,
    searchEmployee
} = require("./employees");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function showMenu() {
    let choice = ""

    while (choice !== "6") {
        console.log("\n===== Employee Management System =====")
        console.log("1. Add Employee")
        console.log("2. Update Employee")
        console.log("3. Delete Employee")
        console.log("4. Search Employee")
        console.log("5. List Employees")
        console.log("6. Exit")

        choice = await rl.question("Enter your choice: ")

        switch (choice) {
            case "1":
                await addEmployee(rl)
                break

            case "2":
                await updateEmployee(rl)
                break

            case "3":
                await deleteEmployee(rl)
                break

            case "4":
                await searchEmployee(rl)
                break

            case "5":
                 listEmployees()
                 break

            case "6":
                console.log("Exiting application...")
                break

            default:
                console.log("Invalid choice. Try again.")
        }
    }

    rl.close()
}

showMenu()
