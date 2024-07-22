class Student{
    name:string;
    roll:number;
    ispass:boolean;

    constructor(n:string,r:number,p:boolean) {
        this.name=n;
        this.roll=r;
        this.ispass=p
    }
    public display() : void{
        console.log(this.name +"of roll num" + this.roll + "is" +this.ispass)
    }
}
const s1= new Student("Avinash",11,true);
s1.display();

//another method

class Student{
   constructor(
        readonly name:string,
        private roll:number,
        protected ispass:boolean

    ){}
    public display() : void{
        console.log(this.name +"of roll num" + this.roll + "is" +this.ispass)
    }
}
const s1= new Student("Avinash",11,true);
s1.display();
