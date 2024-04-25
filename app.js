const prompt = require("prompt-sync")();

const username = prompt("What is your name? ");

console.log(`Your name is ${username}`);

console.log(`Welcome, ${username} to the CRM Tool`);

let customers = [];

async function menu() {
  let choice = "5";
  while (choice !== "true") {
    console.log("Menu:");
    console.log("1. Create customer");
    console.log("2. View all customer");
    console.log("3. Update customers");
    console.log("4. Delete customers");
    console.log("5. Quit");
    choice = prompt("Enter your choice: ");

    switch (choice) {
        case "1":
            console.log("Create customer");
            const id = prompt("Enter customer ID: ");
            const name = prompt("Enter customer name: ");
            const age = prompt("Enter customer age: ");
            const newCustomer = { id, name, age };
            customers.push(newCustomer);
            console.log(`Created customer with ID: ${id}, Name: ${name}, Age: ${age}`);
            menu();
            break;
      case "2":
        console.log("List of customers:");
        customers.forEach((customer) => {
          console.log(
            `ID: ${customer.id}, Name: ${customer.name}, Age: ${customer.age}`
          );
        });
        menu();
        break;
      case "3":
        console.log("Update customers");
        console.log("Enter the id of the customer to update: ");
        const customerId = prompt("Customer ID: ");
        const newName = prompt("Enter new name: ");
        const newAge = prompt("Enter new age: ");
        const customerToUpdate = customers.find(
          (customer) => customer.id === customerId
        );
        if (customerToUpdate) {
          customerToUpdate.name = newName;
          customerToUpdate.age = newAge;
          console.log(
            `Updated customer with ID: ${customerId}, new name: ${newName}, new age: ${newAge}`
          );
        } else {
          console.log(`No customer found with ID: ${customerId}`);
        }
        menu();
        break;
      case "4":
        console.log("Delete customers");
        console.log("Enter the id of the customer to delete: ");
        const deleteCustomerId = prompt("Customer ID: ");
        const confirmDelete = prompt(
          "Are you sure you want to delete this customer? (yes/no): "
        );
        if (confirmDelete.toLowerCase() === "yes") {
          console.log(`Deleting customer with ID: ${deleteCustomerId}`);
        } else {
          console.log("Deletion cancelled");
        }
        menu();
        break;
      case "5":
        console.log(`${username}, thank you for using the CRM Tool. Goodbye`);
        running = false;
        return;
      default:
        console.log("Invalid choice");
        break;
    }
  }
}
menu();
