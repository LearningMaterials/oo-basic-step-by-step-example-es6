import Person from "./person.js";

class Student extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        if (this.klass.isLeader(this)) {
            return `${super.introduce()} I am a Student. I am Leader of ${this.klass.getDisplayName()}.`;
        }
        return `${super.introduce()} I am a Student. I am at ${this.klass.getDisplayName()}.`;
    }

    equal(student) {
        return student && this.id === student.id;
    }
}

export default Student;
