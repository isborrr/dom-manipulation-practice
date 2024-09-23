// Ticket 1: Basic Array Methods

let employes = ['John','Sarah', 'Eric'];
employes.push('Mike');
employes.push(10);

// console.log(employes);

//2)Remove the last employee from the array.

 employees = ['John', 'Sarah', 'Eric'];
let empl = employees.pop();
// console.log(empl);
// console.log(employees);

// 3) Add a new employee to the beginning of the array.

employees = ['John', 'Sarah', 'Eric'];
employees.unshift('David');

// console.log(employees);

//4)Remove the first employee from the array.
employees = ['John', 'Sarah', 'Eric'];
employees.shift();
// console.log(employees);

//5)Find the index of 'Sarah' in the array.

employees = ['John', 'Sarah', 'Eric'];
// console.log(employees.indexOf('Sarah'));




//Ticket 2: Intermediate Array Methods

//1) Filter out salaries below $50,000 from the array.

let salaries = [35000, 45000, 55000, 70000, 90000];

let newSaleries = salaries.filter( (x) => x <  50000);

// console.log(newSaleries);

//2)Create a new array with the square of each salary.
salaries = [2, 4, 5, 7, 9];

newSaleries = salaries.map(x=> x*x);

// console.log(newSaleries);

//3)Find the first salary that is greater than $60,000.

salaries = [45000, 55000, 70000, 90000];

newSaleries = salaries.find(x => x >60000);
// console.log(newSaleries);

//4) Calculate the total sum of all sales made.
let sales = [100, 200, 150, 300, 400];
let sum = sales.reduce((total, sale)=> total+ sale )
// console.log(sum);

//5) Loop through the list of departments and log each one to the console.

let departments = ['HR', 'Finance', 'Engineering', 'Marketing'];
// departments.forEach(x => console.log(x));

//Ticket 3: Advanced Array Manipulation

//1) Create a new array that contains the first three items from the original inventory list.
//Array to work with:

// let inventory2 = ['Laptop', 'Phone', 'Keyboard', 'Monitor', 'Mouse'];

// let newInventory2 = inventory.slice(0,3);

// console.log(newInventory);

//2)Remove two items starting from index 2 in the inventory.
let inventory = ['Laptop', 'Phone', 'Keyboard', 'Monitor', 'Mouse'];

let newInventory1 = inventory.splice(0,2,'Macboock','I Phone',"Camera");
// console.log(newInventory1);
// console.log(inventory);

//3)Add new equipment to the inventory starting at index 3.

//4)Merge two arrays of office equipment into one.

let officeEquipment1 = ['Printer', 'Scanner', 'Desk'];
let officeEquipment2 = ['Chair', 'Lamp', 'Notebook'];

// console.log(officeEquipment1.concat(officeEquipment2));

//5) Sort the list of sales amounts in descending order.

let thesales = [500, 1000, 750, 2000, 1250];

thesales.sort((x,y) => x-y);

console.log(thesales);

//Ticket 4: Working with Objects
