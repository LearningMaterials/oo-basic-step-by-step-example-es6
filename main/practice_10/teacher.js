import Person from "./person.js";

class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = [];
        if(klasses){
            this.klasses = this.klasses.concat(klasses);
        }
    }

    _buildKlassesString() {
        let classesString = "";
        this.klasses.forEach(({number}, index, {length}) => {
            classesString += number;
            if (index != length - 1) {
                classesString += ", ";
            }
        });
        return classesString;
    }

    introduce() {
        if (this.klasses && this.klasses.length!=0) {
            const classesString = this._buildKlassesString();
            return this.teach(`Class ${classesString}`);
        } else {
            return this.teach("No Class");
        }
    }

    teach(order) {
        return `${super.introduce()} I am a Teacher. I teach ${order}.`;
    }
}

export default Teacher;
