class Department {
    constructor(
        private readonly id: string,
        private name: string,
        protected employee: string[] = []
    ) {}

    describe(this: Department) {
        console.log(`Department: ${this.id}: ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employee.push(employee);
    }
}

class ITDepartment extends Department {
    public admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Anna');
console.log(it);

it.describe();

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    addEmployee(person: string) {
        if (person === 'Max') {
            return;
        }
        this.employee.push(person);
    }
}

const accounting = new AccountingDepartment('d2', [
    'Something went wrong',
    'Problem with payments',
]);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

console.log(accounting);
