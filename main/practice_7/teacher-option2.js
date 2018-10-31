import Person from "./person.js";

class Teacher extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        if (this.klass) {
            return this.basicIntroduce(this.klass.getDisplayName());
        } else {
            return this.basicIntroduce("No Class");
        }
    }

    trickyIntroduce(pre, order) {
        return `${super.introduce()} I am a Teacher. I ${pre}teach ${order}.`;
    }

    basicIntroduce(order) {
        return this.trickyIntroduce("", order);
    }

    introduceWith({klass, name}) {
        if (klass.equal(this.klass)) {
            return this.basicIntroduce(name);
        } else {
            return this.trickyIntroduce("don't ", name);
        }
    }
}

export default Teacher;
