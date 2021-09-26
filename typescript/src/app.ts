class Department {
    constructor(
        private readonly id: string,
        private name: string,
        private employee: string[] = []
    ) {}

    describe(this: Department) {
        console.log(`Department: ${this.id}: ${this.name}`);
    }

    addEmployee(employee: string[]) {
        this.employee.push(...employee);
    }
}

const accounting = new Department('d1', 'Accounting');

accounting.describe();

class ITDepartment extends Department {
    public admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

const it = new ITDepartment('d2', ['Max']);
it.addEmployee(['Anna', 'George']);
console.log(it);

it.describe();
