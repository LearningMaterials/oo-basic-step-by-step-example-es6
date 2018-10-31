class Class {
    constructor(number) {
        this.number = number;
        this.leader;
        this.members = [];
        this.assignLeaderListeners = [];
        this.joinListeners = [];
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    assignLeader(student) {
        if (student && student.klass.equal(this)) {
            this.leader = student;
            const me = this;
            this.assignLeaderListeners.forEach(listener => {
                listener.notifyAssignLeader(student, me);
            });
        } else {
            console.log("It is not one of us.");
        }
    }

    appendMember(student) {
        student.klass = this;
        this.members.push(student);
        const me = this;
        this.joinListeners.forEach(listener => {
            listener.notifyJoin(student, me);
        });
    }

    equal(klass) {
        return klass && this.number == klass.number;
    }

    isLeader(student) {
        return this.leader && student && student.equal(this.leader);
    }

    isIn(student) {
        return this.members.some(member => member.equal(student));
    }

    registerJoinListener(listener) {
        this.joinListeners.push(listener);
    }

    registerAssignLeaderListener(listener) {
        this.assignLeaderListeners.push(listener);
    }
}

export default Class;
