class Human {
    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    displayInfo() {
        return 'name = ' + this.name + '; age =' + this.age + '; dateOfBirth = ' + this.dateOfBirth;
    }
}

class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth);
        this.salary = salary;
        this.department = department;
    }

    displayInfo() {
        return super.displayInfo() + ' salary = ' + this.salary + ' department = ' + this.department;
    }
}

class Developer extends Employee {
    changeManager(manager) {
        this.manager = manager;
    }
}

class Manager extends Employee {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth, salary, department);
        this.developers = [];
    }
    addDeveloper(developer) {
        this.developers.push(developer);
    }

    removeDeveloper(developer) {
        for (let i = 0; i < this.developers.length; i++) {
            if (this.developers[i] === developer) {
                this.developers.splice(i, 1);
                break;
            }
        }
    }
}

human = new Human('Алексей', 29, '01.07.1988');
employee = new Employee('Алексей', 29, '01.07.1988', 30000, 'Physics');
developer = new Developer('Алексей', 29, '01.07.1988', 30000, 'Physics');
developer2 = new Developer('Алексей2', 29, '01.07.1988', 30000, 'Physics');
manager = new Manager('Алексей', 29, '01.07.1988', 30000, 'Physics');

manager.addDeveloper(developer);
manager.addDeveloper(developer2);

manager.removeDeveloper(developer2);

console.log(manager);