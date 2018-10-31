class Class {
    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    equal(klass) {
        return klass && this.number == klass.number;
    }
}

export default Class;
