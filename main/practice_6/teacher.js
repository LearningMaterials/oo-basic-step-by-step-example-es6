import Person from "./person.js";

class Teacher extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        if (this.klass) {
            return this.teach(`Class ${this.klass}`);
        } else {
            return this.teach("No Class");

        }
    }

    teach(order) {
        return `${super.introduce()} I am a Teacher. I teach ${order}.`;
    }
}

export default Teacher;
