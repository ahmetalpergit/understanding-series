class Department {
    //private name: string;
    //private id: string;

    //shorthand to create class with variables right away
    constructor(private id: string, private name: string) {
        //this.name = n;
    }

    describe(this: Department) {
        console.log(`Department: ${this.id}: ${this.name}`);
    }
}

const accounting = new Department('d1', 'Accounting');

accounting.describe();
