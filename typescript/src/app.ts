class Department {
    name: string;
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    //adds type check for the object that uses the method to have the same structure as Department
    describe(this: Department) {
        console.log('Department: ' + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    checkEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.checkEmployeeInfo();

//due to private variable, it will throw error
//accounting.employees[2] = 'Ahmet'

//public variable, therefore still accessible
accounting.name = 'NEW NAME';

accounting.describe();
