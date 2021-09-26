class Department {
    constructor(private readonly id: string, private name: string) {}

    describe(this: Department) {
        //not allowed because id is read-only
        //this.id = 'd2'
        console.log(`Department: ${this.id}: ${this.name}`);
    }
}

const accounting = new Department('d1', 'Accounting');

accounting.describe();
