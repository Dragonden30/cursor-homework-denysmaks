class student{
    constructor(univercity, course, fullName){
        this.univercity = univercity;
        this.course = course;
        this.fullName = fullName;
        this.marksArr = [4,5,2,3,5];
        this.denied = false;
    }

    getinfo() {
        return `Student ${this.course} year ${this.univercity}, ${this.fullName}`;
    }
    
    get marks(){
        if(this.denied){
            return null;
        }
        return this.marksArr;
    }

    set marks(mark){
        if(this.denied){
            return null;
        }
        return this.marksArr.push(mark);
    }

    getAvarageMark(){
        if(this.denied){
            return null;
        }
        return Number((this.marksArr.reduce(function(a,b){return a+b;})/this.marksArr.length).toFixed(2));
    }

    dismissStudent(){
        return this.denied = true;
    }
    recoverStudent(){
        return this.denied = false;
    }
}

let studentDenys = new student('National Aviation Univercity in ciry of Kiev.', 4, 'Denys Maksymovych');
console.log(studentDenys.getinfo());
console.log(studentDenys.marks);
console.log(studentDenys.getAvarageMark());
studentDenys.marks = 2;
console.log(studentDenys.marks);
console.log(studentDenys.getAvarageMark());
studentDenys.dismissStudent();
console.log(studentDenys.marks);
studentDenys.marks = 4;
console.log(studentDenys.marks);
studentDenys.recoverStudent();
console.log(studentDenys.marks);
studentDenys.marks = 3;
console.log(studentDenys.marks);