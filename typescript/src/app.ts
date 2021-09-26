class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    //adds type check for the object that uses the method to have the same structure as Department
    describe(this: Department) {
        console.log('Department: ' + this.name);
    }
}

const accounting = new Department('Accounting');

accounting.describe();

//Throws error unless accountingCopy gets a name property
//const accountingCopy = { describe: accounting.describe };

const accountingCopy = { name: 'Math', describe: accounting.describe };

accountingCopy.describe();
