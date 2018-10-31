class Class {
    constructor(number) {
        this.number = number;
        this.leader;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    assignLeader(student) {
        if (student && student.klass.equal(this)) {
            this.leader = student;
        } else {
            console.log("It is not one of us.");
        }
    }

    appendMember(student) {
        student.klass = this;
    }

    equal(klass) {
        return klass && this.number == klass.number;
    }

    isLeader(student) {
        return this.leader && student && student.equal(this.leader);
    }
}

export default Class;
