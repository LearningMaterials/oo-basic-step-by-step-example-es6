import Person from "./person.js";

class Teacher extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        if (this.klass) {
            return this.teach(this.klass.getDisplayName());
        } else {
            return this.teach("No Class");
        }
    }

    basicIntroduce(order) {
        return `${super.introduce()} I am a Teacher.`;
    }

    teach(order) {
        return `${this.basicIntroduce()} I teach ${order}.`;
    }

    doNotTeach(order) {
        return `${this.basicIntroduce()} I don't teach ${order}.`;
    }

    introduceWith({klass, name}) {
        if (klass.equal(this.klass)) {
            return this.teach(name);
        } else {
            return this.doNotTeach(name);
        }
    }
}

export default Teacher;
